export interface Template {
  id: number;
  title: string;
  platform: string;
  src: string;
  scId: string;
  scTrackUrl: string;
  buyLink: string;
  isNew?: boolean;
}

export const templates: Template[] = [
  {
    id: 1,
    title: "Hard Techno Vol.1",
    platform: "Ableton Live 12",
    src: "/images/template-hard-techno.jpg",
    scId: "2267081156",
    scTrackUrl: "https://api.soundcloud.com/tracks/2267081156",
    buyLink: "https://www.myloops.net/product/hard-techno-vol-1-by-nautic-boy-for-ableton-live-12",
    isNew: true
  },
  {
    id: 2,
    title: "Peaktime Techno Vol.1",
    platform: "Logic Pro 11",
    src: "/images/template-peaktime-techno.jpg",
    scId: "2102899560",
    scTrackUrl: "https://api.soundcloud.com/tracks/2102899560",
    buyLink: "https://www.myloops.net/product/peaktime-techno-vol-1-by-nautic-boy-for-logic-pro-11"
  },
  {
    id: 3,
    title: "Uplifting Trance Vol.1",
    platform: "Logic Pro 11",
    src: "/images/template-uplifting-trance-v1-logic.jpeg",
    scId: "2016254219",
    scTrackUrl: "https://api.soundcloud.com/tracks/2016254219",
    buyLink: "https://www.myloops.net/product/nautic-boy-uplifting-trance-template-vol-1-for-logic-pro-11"
  },
  {
    id: 4,
    title: "Uplifting Trance Vol.1",
    platform: "Ableton Live 12",
    src: "/images/template-uplifting-trance-v1-ableton.jpg",
    scId: "2027985880",
    scTrackUrl: "https://api.soundcloud.com/tracks/2027985880",
    buyLink: "https://www.myloops.net/product/nautic-boy-uplifting-trance-template-vol-1-for-ableton-live-12"
  },
  {
    id: 5,
    title: "Bigroom Techno Vol.1",
    platform: "Ableton Live 12",
    src: "/images/template-bigroom-techno.jpg",
    scId: "2133598281",
    scTrackUrl: "https://api.soundcloud.com/tracks/2133598281",
    buyLink: "https://www.myloops.net/product/bigroom-techno-template-vol-1-by-nautic-boy-for-ableton-live-12"
  },
  {
    id: 6,
    title: "Uplifting Trance Vol.2",
    platform: "Ableton Live 12",
    src: "/images/template-uplifting-trance-v2.jpg",
    scId: "2039486804",
    scTrackUrl: "https://api.soundcloud.com/tracks/2039486804",
    buyLink: "https://www.myloops.net/product/nautic-boy-uplifting-trance-template-vol-2-for-ableton-live-12"
  }
];
