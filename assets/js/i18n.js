// ─── i18n Translation System ─────────────────────────────────────────────────
// Default language: English (hardcoded in HTML)
// Toggle switches to Spanish (ES) and back to English (EN)

(function () {
    'use strict';

    const translations = {
        es: {
            // Navbar
            nav_studio: 'Estudio',
            nav_contact: 'Contacto',

            // Hero
            hero_desc: 'Elevando la música electrónica desde la cabina hasta el master final. Productor, DJ e Ingeniero de mezcla y mastering.',
            hero_cta1: 'Servicios de Estudio',
            hero_cta2: 'Herramientas para Productores',

            // Services
            services_desc: 'Servicios profesionales de mezcla y mastering para tu música. Calidad de industria para el artista moderno.',
            mixing_desc: 'Balance, EQ, compresión y efectos para que tus tracks suenen perfectos juntos.',
            mixing_ableton: 'Proyectos en Ableton Live y REAPER',
            mixing_cta: 'Solicitar por $50 USD',
            mastering_desc: 'El pulido final. Loudness, claridad y consistencia para todas las plataformas de streaming.',
            mastering_cta: 'Solicitar por $30 USD',

            // Releases
            nav_releases: 'Lanzamientos',
            releases_title: 'Lanzamientos <span class="text-brand-accent">Oficiales</span>',
            releases_desc: 'Tracks originales, remixes y colaboraciones lanzados en sellos de música electrónica a nivel mundial.',
            listen_spotify: 'Escuchar en Spotify',

            // Templates
            templates_title: 'Templates de <span class="text-brand-accent">Producción</span>',
            templates_desc: 'Acelera tu flujo de trabajo con mis plantillas oficiales. Proyectos completos, listos para estudiar y personalizar.',
            template_cta: 'Ver en MyLoops',

            // Work
            work_subtitle: 'Así suena la música profesional.',

            // About
            about_p1: 'Con más de 10 años de experiencia en la industria, he dedicado mi vida al arte del sonido. Mi filosofía es simple: la tecnología debe servir al arte, no al revés.',
            about_p2: 'Ya sea que estés grabando en una habitación o en un estudio multimillonario, mi objetivo es que tu música se traduzca perfectamente en cada sistema de sonido del mundo.',
            about_years: 'Años',

            // Contact
            contact_title: 'Trabajemos Juntos',
            contact_desc: '¿Listo para llevar tu sonido al siguiente nivel? Envíame un mensaje.',
            form_name: 'Nombre',
            form_service: 'Servicio',
            form_message: 'Mensaje',
            form_other: 'Otro',
            form_submit: 'Enviar Mensaje',
            form_name_ph: 'Tu Nombre',
            form_message_ph: 'Cuéntame sobre tu proyecto...',

            // Footer
            footer_desc: 'Elevando la música electrónica desde la cabina hasta el master final. Productor, DJ e Ingeniero de mezcla y mastering.',
            footer_services: 'Servicios',
            footer_nav: 'Navegación',
            footer_newsletter: 'Mantente Actualizado',
            footer_newsletter_desc: 'Suscríbete para recibir las últimas novedades y tips de producción.',
            footer_email_ph: 'Tu email',
            footer_subscribe: 'Suscribirse',
            footer_privacy: 'Política de Privacidad',
            footer_terms: 'Términos de Servicio',
        },
        en: {
            nav_studio: 'Studio',
            nav_contact: 'Contact',
            hero_desc: 'Elevating electronic music from the booth to the final master. Producer, DJ and Mix & Mastering Engineer.',
            hero_cta1: 'Studio Services',
            hero_cta2: 'Tools for Producers',
            services_desc: 'Professional mixing and mastering services for your music. Industry-standard quality for the modern artist.',
            mixing_desc: 'Balance, EQ, compression and effects to make your tracks sit perfectly together.',
            mixing_ableton: 'Ableton Live & REAPER Projects',
            mixing_cta: 'Request for $50 USD',
            mastering_desc: 'The final polish. Loudness, clarity and consistency for all streaming platforms.',
            mastering_cta: 'Request for $30 USD',
            nav_releases: 'Releases',
            releases_title: 'Official <span class="text-brand-accent">Releases</span>',
            releases_desc: 'Original tracks, remixes and collaborations released on major electronic music labels worldwide.',
            listen_spotify: 'Listen on Spotify',
            templates_title: 'Production <span class="text-brand-accent">Templates</span>',
            templates_desc: 'Speed up your workflow with my official templates. Complete projects, ready to study and customize.',
            template_cta: 'View on MyLoops',
            work_subtitle: 'This is how Pro Music sounds.',
            about_p1: "With over 10 years of experience in the industry, I've dedicated my life to the art of sound. My philosophy is simple: technology should serve the art, not the other way around.",
            about_p2: "Whether you're recording in a bedroom or a multi-million dollar studio, my goal is to make your music translate perfectly to every speaker system in the world.",
            about_years: 'Years',
            contact_title: "Let's Work Together",
            contact_desc: 'Ready to take your sound to the next level? Send me a message.',
            form_name: 'Name',
            form_service: 'Service',
            form_message: 'Message',
            form_other: 'Other',
            form_submit: 'Send Message',
            form_name_ph: 'Your Name',
            form_message_ph: 'Tell me about your project...',
            footer_desc: 'Elevating electronic music from the booth to the final master. Producer, DJ and Mix & Mastering Engineer.',
            footer_services: 'Services',
            footer_nav: 'Navigation',
            footer_newsletter: 'Stay Updated',
            footer_newsletter_desc: 'Subscribe to get the latest news and production tips.',
            footer_email_ph: 'Enter your email',
            footer_subscribe: 'Subscribe',
            footer_privacy: 'Privacy Policy',
            footer_terms: 'Terms of Service',
        }
    };

    // Detect initial language: saved preference → browser preference → English
    function detectLanguage() {
        const saved = localStorage.getItem('nb_lang');
        if (saved) return saved;

        // Check browser language preferences for any Spanish variant
        const langs = navigator.languages || [navigator.language || 'en'];
        for (const lang of langs) {
            if (lang.startsWith('es')) return 'es';
            if (lang.startsWith('en')) return 'en';
        }
        return 'en';
    }

    let currentLang = detectLanguage();

    function applyLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;

        // Update text content via data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                // Some keys contain HTML (spans with classes), use innerHTML
                if (dict[key].includes('<')) {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // Update placeholders via data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.placeholder = dict[key];
            }
        });

        // Restore SVG icons inside template_cta elements (they get wiped by textContent)
        document.querySelectorAll('[data-i18n="template_cta"]').forEach(el => {
            const svgExists = el.querySelector('svg');
            if (!svgExists) {
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('class', 'w-4 h-4');
                svg.setAttribute('fill', 'none');
                svg.setAttribute('stroke', 'currentColor');
                svg.setAttribute('viewBox', '0 0 24 24');
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('stroke-linecap', 'round');
                path.setAttribute('stroke-linejoin', 'round');
                path.setAttribute('stroke-width', '2');
                path.setAttribute('d', 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14');
                svg.appendChild(path);
                el.appendChild(document.createTextNode(' '));
                el.appendChild(svg);
            }
        });

        // Restore Spotify SVG icons inside listen_spotify elements
        document.querySelectorAll('[data-i18n="listen_spotify"]').forEach(el => {
            const svgExists = el.querySelector('svg');
            if (!svgExists) {
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('class', 'w-4 h-4');
                svg.setAttribute('viewBox', '0 0 24 24');
                svg.setAttribute('fill', 'currentColor');
                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', 'M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z');
                svg.appendChild(path);
                el.prepend(svg);
            }
        });

        // Update lang attribute on <html>
        document.documentElement.lang = lang;

        // Update toggle label to show the OTHER language
        const langLabel = document.getElementById('lang-label');
        if (langLabel) {
            langLabel.textContent = lang === 'en' ? 'ES' : 'EN';
        }

        // Save preference
        localStorage.setItem('nb_lang', lang);
        currentLang = lang;
    }

    // Toggle handler
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'es' : 'en';
            applyLanguage(newLang);
        });
    }

    // Apply saved language on load (if not English)
    if (currentLang !== 'en') {
        applyLanguage(currentLang);
    }
})();
