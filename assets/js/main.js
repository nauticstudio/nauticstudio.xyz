// Works Data
const works = [
    {
        title: "Sensations",
        description: "Psytrance • Mixing & Mastering",
        src: "assets/images/project-1.jpg",
        audioSrc: "assets/media/preview-project-1.mp3",
        ctaLink: "#",
        content: "Debut of the AudioRave label."
    },
    {
        title: "Deep Voices",
        description: "Hip Hop • Mastering",
        src: "assets/images/project-2.jpg",
        audioSrc: "assets/media/preview-project-2.mp3",
        ctaLink: "#",
        content: "Gritty textures meets modern trap drums. The goal was to enhance the low-end impact without muddying the mix. We used multiband compression to tighten the bass and added harmonic saturation to the vocals to make them pop. The final master is loud, clear, and ready for club systems."
    },
    {
        title: "Inviktor",
        description: "Psytrance • Mixing & Mastering",
        src: "assets/images/project-3.jpg",
        audioSrc: "assets/media/preview-project-3.mp3",
        ctaLink: "#",
        content: "Smooth, sultry, and emotional. This R&B track needed a pristine vocal chain. We utilized a combination of optical compression and plate reverb to give the vocals a silky, expensive feel. The instrumentation was spaced out using stereo widening techniques to create an immersive listening experience."
    },
    {
        title: "Be Hater",
        description: "Psytrance • Mixing & Mastering",
        src: "assets/images/project-4.jpg",
        audioSrc: "assets/media/preview-project-4.mp3",
        ctaLink: "#",
        content: "High-energy festival anthem. Stem mastering allowed us to surgically correct balance issues between the drop synths and the sub-bass. We applied transient shaping to the drums to ensure they hit hard even in the busiest sections of the track. The result is a massive, wide sound that dominates the dancefloor."
    },
    {
        title: "Rivero",
        description: "Psytrance • Mixing & Mastering",
        src: "assets/images/project-5.jpg",
        audioSrc: "assets/media/preview-project-5.mp3",
        ctaLink: "#",
        content: "Intimate and raw. The focus here was on capturing the natural resonance of the acoustic guitar and the warmth of the vocals. Minimal processing was used to maintain the organic feel, with subtle saturation to add character."
    },
    {
        title: "Visions",
        description: "Psytrance • Mixing & Mastering",
        src: "assets/images/project-6.jpg",
        audioSrc: "assets/media/preview-project-6.mp3",
        ctaLink: "#",
        content: "Aggressive and distorted. This track needed to be loud and in-your-face without losing definition. We used parallel compression to add density and a clipper to shave off peaks, allowing for maximum loudness."
    },
    {
        title: "Life Struggles",
        description: "Psytrance • Mixing & Mastering",
        src: "assets/images/project-7.jpg",
        audioSrc: "assets/media/preview-project-7.mp3",
        ctaLink: "#",
        content: "Live room feel. The challenge was to balance the bleed between instruments while keeping the mix clean. We used automation to highlight solos and dynamic EQ to control resonances."
    },
    {
        title: "The Launch (Nautic Boy Remix)",
        description: "Big Room Techno • Mixing & Mastering",
        src: "assets/images/project-8.jpg",
        audioSrc: "assets/media/preview-project-8.mp3",
        ctaLink: "#",
        content: "Radio-ready polish. This track involved extensive vocal production, including tuning, alignment, and harmony processing. The mix is bright and punchy, designed to sound great on everything from phones to car speakers."
    }
];

// DOM Elements
const gridContainer = document.getElementById('work-grid');
const modalOverlay = document.getElementById('modal-overlay');
const modalContainer = document.getElementById('modal-container');
const modalCard = document.getElementById('modal-card');
const modalClose = document.getElementById('modal-close');
const modalCta = document.getElementById('modal-cta');

// Audio Player Elements
let currentAudio = new Audio();
let isPlaying = false;

// Function to create a card element
function createCard(work) {
    const card = document.createElement('div');
    // Fixed width for horizontal scroll
    card.className = 'w-[300px] md:w-[350px] flex-shrink-0 p-4 flex flex-col hover:bg-white/5 rounded-xl cursor-pointer transition-colors group';
    card.onclick = () => openModal(work);
    card.innerHTML = `
        <div class="flex flex-col w-full gap-4">
            <div class="overflow-hidden rounded-lg aspect-square w-full relative">
                <img src="${work.src}" alt="${work.title}" class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500">
            </div>
            <div class="flex flex-col items-start">
                <h3 class="font-bold text-white text-lg mb-1">${work.title}</h3>
                <p class="text-gray-400 text-sm">${work.description}</p>
            </div>
        </div>
    `;
    return card;
}

// Render Cards (Duplicate for infinite scroll)
if (gridContainer) {
    [...works, ...works].forEach(work => {
        gridContainer.appendChild(createCard(work));
    });
}

function toggleAudio() {
    if (isPlaying) {
        currentAudio.pause();
        modalCta.innerHTML = 'Listen';
        modalCta.classList.remove('bg-red-500', 'hover:bg-red-600');
        modalCta.classList.add('bg-brand-accent', 'hover:bg-brand-secondary');
    } else {
        currentAudio.play().catch(e => {
            console.log("Audio play failed (likely missing file):", e);
            // Optional: Show error state or keep button as 'Listen'
        });
        modalCta.innerHTML = 'Pause';
        modalCta.classList.remove('bg-brand-accent', 'hover:bg-brand-secondary');
        modalCta.classList.add('bg-red-500', 'hover:bg-red-600');
    }
    isPlaying = !isPlaying;
}

// Reset audio state when it ends
currentAudio.addEventListener('ended', () => {
    isPlaying = false;
    modalCta.innerHTML = 'Listen';
    modalCta.classList.remove('bg-red-500', 'hover:bg-red-600');
    modalCta.classList.add('bg-brand-accent', 'hover:bg-brand-secondary');
});

function openModal(work) {
    document.getElementById('modal-image').src = work.src;
    document.getElementById('modal-title').textContent = work.title;
    document.getElementById('modal-description').textContent = work.description;
    document.getElementById('modal-content').textContent = work.content;

    // Setup Audio
    currentAudio.src = work.audioSrc;
    currentAudio.load();

    // Reset Button State
    isPlaying = false;
    modalCta.innerHTML = 'Listen';
    modalCta.classList.remove('bg-red-500', 'hover:bg-red-600');
    modalCta.classList.add('bg-brand-accent', 'hover:bg-brand-secondary');

    // Set click handler directly (overwrites previous one)
    modalCta.onclick = (e) => {
        e.preventDefault();
        toggleAudio();
    };

    modalOverlay.classList.remove('hidden');
    modalContainer.classList.remove('hidden');
    modalContainer.classList.add('flex');

    // Small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        modalOverlay.classList.remove('opacity-0');
        modalCard.classList.remove('opacity-0', 'scale-95');
        modalCard.classList.add('scale-100');
    }, 10);

    document.body.style.overflow = 'hidden';
}

function closeModal() {
    // Stop Audio
    currentAudio.pause();
    currentAudio.currentTime = 0;
    isPlaying = false;

    modalOverlay.classList.add('opacity-0');
    modalCard.classList.remove('scale-100');
    modalCard.classList.add('opacity-0', 'scale-95');

    setTimeout(() => {
        modalOverlay.classList.add('hidden');
        modalContainer.classList.add('hidden');
        modalContainer.classList.remove('flex');
    }, 300); // Match transition duration

    document.body.style.overflow = 'auto';
}

if (modalClose) modalClose.onclick = closeModal;
if (modalOverlay) modalOverlay.onclick = closeModal;

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Comet Card 3D Effect
document.querySelectorAll('.comet-card-container').forEach(container => {
    const card = container.querySelector('.comet-card');
    const glare = container.querySelector('.comet-glare');
    const rotateDepth = 17.5;
    const translateDepth = 20;

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        const rotateX = -yPct * rotateDepth * 2;
        const rotateY = xPct * rotateDepth * 2;
        const translateX = xPct * translateDepth * 2;
        const translateY = yPct * translateDepth * 2;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) scale(1.05)`;

        // Glare effect
        const glareX = (mouseX / width) * 100;
        const glareY = (mouseY / height) * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)`;
        glare.style.opacity = '0.6';
    });

    container.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) scale(1)';
        glare.style.opacity = '0';
    });
});

// Resizable Navbar Logic
const navbar = document.getElementById('navbar');
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuContent = document.getElementById('mobile-menu-content');

// Scroll Handler
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        // Scrolled State
        navbar.classList.remove('w-full', 'bg-transparent', 'px-6', 'py-4');
        navbar.classList.add('w-[90%]', 'md:w-[60%]', 'lg:w-[60%]', 'mt-4', 'rounded-full', 'bg-black/80', 'backdrop-blur-md', 'border', 'border-white/10', 'shadow-xl', 'px-4', 'py-2');
    } else {
        // Initial State
        navbar.classList.add('w-full', 'bg-transparent', 'px-6', 'py-4');
        navbar.classList.remove('w-[90%]', 'md:w-[60%]', 'lg:w-[60%]', 'mt-4', 'rounded-full', 'bg-black/80', 'backdrop-blur-md', 'border', 'border-white/10', 'shadow-xl', 'px-4', 'py-2');
    }
});

// Mobile Menu Handler
if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
            // Open
            mobileMenu.classList.remove('hidden');
            // Small delay for transition
            setTimeout(() => {
                mobileMenuContent.classList.remove('scale-95', 'opacity-0');
                mobileMenuContent.classList.add('scale-100', 'opacity-100');
            }, 10);
        } else {
            // Close
            mobileMenuContent.classList.remove('scale-100', 'opacity-100');
            mobileMenuContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        }
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuContent.classList.remove('scale-100', 'opacity-100');
            mobileMenuContent.classList.add('scale-95', 'opacity-0');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
        });
    });
}
