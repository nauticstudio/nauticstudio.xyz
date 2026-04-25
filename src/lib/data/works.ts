export interface Work {
  id: number;
  title: string;
  description: string;
  src: string;
  audioSrc: string;
  ctaLink: string;
  content: string;
}

export const works: Work[] = [
  {
    id: 1,
    title: "Sensations",
    description: "Psytrance • Mixing & Mastering",
    src: "/images/project-1.jpg",
    audioSrc: "/media/preview-project-1.mp3",
    ctaLink: "#",
    content: "Debut of the AudioRave label."
  },
  {
    id: 2,
    title: "Deep Voices",
    description: "Hip Hop • Mastering",
    src: "/images/project-2.jpg",
    audioSrc: "/media/preview-project-2.mp3",
    ctaLink: "#",
    content: "Gritty textures meets modern trap drums. The goal was to enhance the low-end impact without muddying the mix. We used multiband compression to tighten the bass and added harmonic saturation to the vocals to make them pop."
  },
  {
    id: 3,
    title: "Inviktor",
    description: "Psytrance • Mixing & Mastering",
    src: "/images/project-3.jpg",
    audioSrc: "/media/preview-project-3.mp3",
    ctaLink: "#",
    content: "Smooth, sultry, and emotional. This track needed a pristine vocal chain. We utilized a combination of optical compression and plate reverb to give the vocals a silky, expensive feel."
  },
  {
    id: 4,
    title: "Be Hater",
    description: "Psytrance • Mixing & Mastering",
    src: "/images/project-4.jpg",
    audioSrc: "/media/preview-project-4.mp3",
    ctaLink: "#",
    content: "High-energy festival anthem. Stem mastering allowed us to surgically correct balance issues between the drop synths and the sub-bass."
  },
  {
    id: 5,
    title: "Rivero",
    description: "Psytrance • Mixing & Mastering",
    src: "/images/project-5.jpg",
    audioSrc: "/media/preview-project-4.mp3", // Reusing for demo if missing
    ctaLink: "#",
    content: "Intimate and raw. The focus here was on capturing the natural resonance of the acoustic guitar and the warmth of the vocals."
  },
  {
    id: 6,
    title: "Visions",
    description: "Psytrance • Mixing & Mastering",
    src: "/images/project-6.jpg",
    audioSrc: "/media/preview-project-1.mp3",
    ctaLink: "#",
    content: "Aggressive and distorted. This track needed to be loud and in-your-face without losing definition."
  },
  {
    id: 7,
    title: "Life Struggles",
    description: "Psytrance • Mixing & Mastering",
    src: "/images/project-7.jpg",
    audioSrc: "/media/preview-project-2.mp3",
    ctaLink: "#",
    content: "Live room feel. The challenge was to balance the bleed between instruments while keeping the mix clean."
  },
  {
    id: 8,
    title: "The Launch (Nautic Boy Remix)",
    description: "Big Room Techno • Mixing & Mastering",
    src: "/images/project-8.jpg",
    audioSrc: "/media/preview-project-3.mp3",
    ctaLink: "#",
    content: "Radio-ready polish. This track involved extensive vocal production, including tuning, alignment, and harmony processing."
  }
];
