// ─── SoundCloud Preview Player ──────────────────────────────────────────────
// Uses SoundCloud Widget API to play audio previews on template cards.
// Custom progress bar instead of iframe embed for a clean, slim look.

(function () {
    'use strict';

    const players = [];
    let activePlayer = null;

    function buildProgressBar(miniPlayer) {
        // Create custom progress bar UI
        const wrapper = document.createElement('div');
        wrapper.style.cssText = 'display:flex;align-items:center;gap:8px;padding:6px 12px;background:rgba(0,0,0,0.4);';

        // Time elapsed
        const timeEl = document.createElement('span');
        timeEl.style.cssText = 'font-size:10px;color:#aaa;font-family:monospace;min-width:36px;';
        timeEl.textContent = '0:00';

        // Progress track
        const track = document.createElement('div');
        track.style.cssText = 'flex:1;height:4px;background:rgba(255,255,255,0.15);border-radius:2px;cursor:pointer;position:relative;';

        const fill = document.createElement('div');
        fill.style.cssText = 'height:100%;background:#ff6600;border-radius:2px;width:0%;transition:width 0.3s linear;';
        track.appendChild(fill);

        // Time total
        const durationEl = document.createElement('span');
        durationEl.style.cssText = 'font-size:10px;color:#aaa;font-family:monospace;min-width:36px;text-align:right;';
        durationEl.textContent = '0:00';

        wrapper.appendChild(timeEl);
        wrapper.appendChild(track);
        wrapper.appendChild(durationEl);
        miniPlayer.appendChild(wrapper);

        return { wrapper, fill, timeEl, durationEl, track };
    }

    function formatTime(ms) {
        const s = Math.floor(ms / 1000);
        const m = Math.floor(s / 60);
        const sec = s % 60;
        return `${m}:${sec.toString().padStart(2, '0')}`;
    }

    function showMiniPlayer(player) {
        const mp = player.miniPlayer;
        if (!mp) return;
        mp.style.maxHeight = '32px';
        mp.style.opacity = '1';
    }

    function hideMiniPlayer(player) {
        const mp = player.miniPlayer;
        if (!mp) return;
        mp.style.maxHeight = '0';
        mp.style.opacity = '0';
    }

    function setPlaying(player) {
        player.playing = true;
        player.iconPlay.classList.add('hidden');
        player.iconPause.classList.remove('hidden');
        player.btn.classList.add('!opacity-100', '!scale-100');
        showMiniPlayer(player);
        startProgressUpdate(player);
    }

    function setPaused(player) {
        player.playing = false;
        player.iconPlay.classList.remove('hidden');
        player.iconPause.classList.add('hidden');
        player.btn.classList.remove('!opacity-100', '!scale-100');
        hideMiniPlayer(player);
        stopProgressUpdate(player);
    }

    function startProgressUpdate(player) {
        if (player._interval) return;
        player._interval = setInterval(() => {
            player.widget.getPosition((pos) => {
                player.widget.getDuration((dur) => {
                    if (dur > 0) {
                        const pct = (pos / dur) * 100;
                        player.progressBar.fill.style.width = pct + '%';
                        player.progressBar.timeEl.textContent = formatTime(pos);
                        player.progressBar.durationEl.textContent = formatTime(dur);
                    }
                });
            });
        }, 500);
    }

    function stopProgressUpdate(player) {
        if (player._interval) {
            clearInterval(player._interval);
            player._interval = null;
        }
    }

    function init() {
        const containers = document.querySelectorAll('[data-sc-track]');
        if (!containers.length) return;

        containers.forEach((container, i) => {
            const trackUrl = container.getAttribute('data-sc-track');
            const btn = container.querySelector('.sc-play-btn');
            const iconPlay = container.querySelector('.sc-icon-play');
            const iconPause = container.querySelector('.sc-icon-pause');

            const card = container.closest('.glass-card');
            const miniPlayer = card ? card.querySelector('.sc-mini-player') : null;

            if (!btn || !trackUrl) return;

            // Build custom progress bar
            const progressBar = miniPlayer ? buildProgressBar(miniPlayer) : null;

            // Hidden iframe for SoundCloud widget API (audio only)
            const iframe = document.createElement('iframe');
            iframe.id = `sc-widget-${i}`;
            iframe.allow = 'autoplay';
            iframe.style.cssText = 'position:absolute;width:0;height:0;border:0;overflow:hidden;pointer-events:none;';
            iframe.src = `https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&auto_play=false&buying=false&liking=false&download=false&sharing=false&show_artwork=false&show_comments=false&show_playcount=false&show_user=false&hide_related=true&visual=false&start_track=0&color=%23ff6600&show_teaser=false`;
            container.appendChild(iframe);

            const widget = SC.Widget(iframe);
            const player = { container, iframe, widget, btn, iconPlay, iconPause, miniPlayer, progressBar, playing: false, _interval: null };

            widget.bind(SC.Widget.Events.PLAY, () => setPlaying(player));
            widget.bind(SC.Widget.Events.PAUSE, () => setPaused(player));
            widget.bind(SC.Widget.Events.FINISH, () => setPaused(player));

            // Click on progress track to seek
            if (progressBar) {
                progressBar.track.addEventListener('click', (e) => {
                    const rect = progressBar.track.getBoundingClientRect();
                    const pct = (e.clientX - rect.left) / rect.width;
                    widget.getDuration((dur) => {
                        widget.seekTo(dur * pct);
                    });
                });
            }

            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                if (player.playing) {
                    widget.pause();
                } else {
                    if (activePlayer && activePlayer !== player && activePlayer.playing) {
                        activePlayer.widget.pause();
                    }
                    activePlayer = player;
                    widget.play();
                }
            });

            players.push(player);
        });
    }

    function waitForSCWidget(callback, maxAttempts) {
        let attempts = 0;
        const check = setInterval(() => {
            attempts++;
            if (typeof SC !== 'undefined' && SC.Widget) {
                clearInterval(check);
                callback();
            } else if (attempts >= (maxAttempts || 50)) {
                clearInterval(check);
                console.warn('SoundCloud Widget API not loaded');
            }
        }, 200);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => waitForSCWidget(init));
    } else {
        waitForSCWidget(init);
    }
})();
