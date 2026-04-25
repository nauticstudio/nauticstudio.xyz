'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { Play, Pause } from 'lucide-react';
import { WaveformProgress } from '../ui/WaveformProgress';

interface SCPlayerWrapperProps {
  tracks: { id: number; scId: string; title: string; src: string; buyLink: string }[];
  ctaText: string;
}

export const SCPlayerWrapper: React.FC<SCPlayerWrapperProps> = ({ tracks, ctaText }) => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [widget, setWidget] = useState<any>(null);

  const currentTrack = tracks.find(t => t.id === playingId);

  useEffect(() => {
    // SC is loaded via Script component in the parent
    const initWidget = () => {
      if ((window as any).SC) {
        const iframeElement = document.querySelector('#sc-widget') as HTMLIFrameElement;
        if (iframeElement) {
          const scWidget = (window as any).SC.Widget(iframeElement);
          setWidget(scWidget);

          // Bind events
          scWidget.bind((window as any).SC.Widget.Events.PLAY_PROGRESS, (data: { relativePosition: number }) => {
            setProgress(data.relativePosition);
          });

          scWidget.bind((window as any).SC.Widget.Events.FINISH, () => {
            setPlayingId(null);
            setProgress(0);
          });
        }
      }
    };

    const timer = setTimeout(initWidget, 1000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = (id: number, scId: string) => {
    if (!widget) return;

    if (playingId === id) {
      widget.pause();
      setPlayingId(null);
    } else {
      setProgress(0);
      widget.load(`https://api.soundcloud.com/tracks/${scId}`, {
        auto_play: true,
        show_artwork: false,
        visual: false
      });
      setPlayingId(id);
    }
  };

  const handleSeek = (percent: number) => {
    if (!widget) return;
    widget.getDuration((duration: number) => {
      widget.seekTo(duration * percent);
    });
  };

  const handleClose = () => {
    if (widget) widget.pause();
    setPlayingId(null);
    setProgress(0);
  };

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks.map((track) => (
          <div key={track.id} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 aspect-square">
            <img 
              src={track.src} 
              alt={track.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-8 text-center">
              <h3 className="text-xl font-bold mb-4">{track.title}</h3>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => togglePlay(track.id, track.scId)}
                  className="w-14 h-14 rounded-full bg-brand-accent text-black flex items-center justify-center hover:scale-110 transition-transform"
                >
                  {playingId === track.id ? <Pause fill="currentColor" /> : <Play fill="currentColor" className="ml-1" />}
                </button>
                
                <a 
                  href={track.buyLink} 
                  target="_blank"
                  className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-colors"
                >
                  {ctaText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Waveform Progress Bar */}
      <WaveformProgress 
        progress={progress}
        isPlaying={playingId !== null}
        trackTitle={currentTrack?.title || ''}
        onClose={handleClose}
        onSeek={handleSeek}
      />

      {/* Hidden Player */}
      <iframe
        id="sc-widget"
        width="100%"
        height="166"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1"
        style={{ display: 'none' }}
      />
    </>
  );
};
