export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  src: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Vlex",
    role: "DJ Producer",
    quote: "Working with Nautic Studio was a game-changer. They handled the low-end dynamics perfectly, giving the track that massive club-ready punch I needed. The attention to detail is simply unmatched.",
    src: "/images/review-1.jpg"
  },
  {
    id: 2,
    name: "NiPe",
    role: "DJ Producer",
    quote: "I was blown away by the speed and professionalism. They understood my vision immediately and took the mix to a level I couldn't have reached on my own.",
    src: "/images/review-2.jpg"
  },
  {
    id: 3,
    name: "Robert Ríos",
    role: "DJ Producer",
    quote: "I've worked with many engineers, but none have the ear that Nautic Studio does. They brought out hidden details in my production and added a warmth and depth that made the song feel alive.",
    src: "/images/review-3.png"
  },
  {
    id: 4,
    name: "Tomas Llorca",
    role: "DJ Producer",
    quote: "The mix & mastering service is incredible. It gave my track the clarity and separation it was missing.",
    src: "/images/review-4.jpg"
  }
];
