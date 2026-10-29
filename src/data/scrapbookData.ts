export interface ScrapbookPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  creator: string;
  story: string;
  date: string;
  rotation?: number;
}

export const CATEGORIES = [
  "All Moments",
  "Animals",
  "Sky and Clouds",
  "Sunset and Sunrise",
  "Moon and Night Sky",
  "Flowers and Trees",
  "Café, Coffee and Food",
  "Water, Ocean and River",
  "Streets",
  "Cars and Bikes",
  "Mountains and Nature"
];

export const SCRAPBOOK_PHOTOS: ScrapbookPhoto[] = [
  {
    id: "photo-1",
    title: "Morning Golden Hour on the Sidewalk",
    category: "Streets",
    imageUrl: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80",
    creator: "Elena R.",
    story: "Caught this quiet beam of morning light hitting the old brick bakery just as I stepped out for my first espresso. The air smelled of fresh croissants and damp pavement.",
    date: "October 14",
    rotation: -1.5
  },
  {
    id: "photo-2",
    title: "Sleepy Afternoon Cat in the Sunbeam",
    category: "Animals",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80",
    creator: "Marcus V.",
    story: "Barnaby refuses to move until the sun puddle crosses the entire Persian rug. Peak productivity.",
    date: "October 18",
    rotation: 2
  },
  {
    id: "photo-3",
    title: "Highland Pine Whispers",
    category: "Flowers and Trees",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    creator: "Siddharth K.",
    story: "A crisp morning hike where the pine needles felt like a soft carpet underfoot. Silence except for distant wind.",
    date: "September 29",
    rotation: -1
  },
  {
    id: "photo-4",
    title: "Cerulean Drift",
    category: "Sky and Clouds",
    imageUrl: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=800&q=80",
    creator: "Chloe L.",
    story: "Looked up between back-to-back meetings and found these cotton candy cumulus clouds drifting slow as honey.",
    date: "October 22",
    rotation: 1.5
  },
  {
    id: "photo-5",
    title: "Amber Dusk over the Harbor",
    category: "Sunset and Sunrise",
    imageUrl: "https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=800&q=80",
    creator: "Hana M.",
    story: "The sky turned molten copper for exactly seven minutes before dissolving into indigo twilight.",
    date: "October 05",
    rotation: -2
  },
  {
    id: "photo-6",
    title: "Midnight Blue & Silver",
    category: "Moon and Night Sky",
    imageUrl: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    creator: "Liam P.",
    story: "A crisp autumn midnight when the half moon shone so bright it cast soft shadows on the frost.",
    date: "October 25",
    rotation: 1
  },
  {
    id: "photo-7",
    title: "Corner Café Brew",
    category: "Café, Coffee and Food",
    imageUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
    creator: "Sophia N.",
    story: "Slow pour-over in a ceramic mug that keeps your hands warm on chilly Thursdays.",
    date: "October 20",
    rotation: -0.5
  },
  {
    id: "photo-8",
    title: "River Stones & Rushing Water",
    category: "Water, Ocean and River",
    imageUrl: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&w=800&q=80",
    creator: "Noah B.",
    story: "Listening to the creek tumble over mossy stones. Time completely disappears here.",
    date: "October 11",
    rotation: 1.8
  },
  {
    id: "photo-9",
    title: "Vintage Blue Scooter on Cobblestones",
    category: "Cars and Bikes",
    imageUrl: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80",
    creator: "Camilla D.",
    story: "Parked outside the neighborhood flower shop. Loved the faded turquoise paint against the old stone wall.",
    date: "October 08",
    rotation: -1.2
  },
  {
    id: "photo-10",
    title: "Mist Over the Ridge",
    category: "Mountains and Nature",
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
    creator: "Aarav T.",
    story: "Waking up before sunrise to catch the fog lifting off the lower valley.",
    date: "September 19",
    rotation: 1.2
  }
];
