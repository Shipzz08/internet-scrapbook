export interface CategoryBook {
  id: string;
  label: string;
  pattern: string;
  height: number;
  width: number;
  color: string;
  fontFamily: string;
  fontScale: number;
}

export const CATEGORY_BOOKS: CategoryBook[] = [
  {
    id: 'animals',
    label: 'Animals',
    pattern: 'paw-prints',
    height: 440,
    width: 72,
    color: 'var(--bubblegum)',
    fontFamily: 'var(--font-book-1)',
    fontScale: 1.0,
  },
  {
    id: 'sky-and-clouds',
    label: 'Sky and Clouds',
    pattern: 'clouds',
    height: 480,
    width: 82,
    color: 'var(--neutral-paper)',
    fontFamily: 'var(--font-book-2)',
    fontScale: 0.95,
  },
  {
    id: 'sunset-and-sunrise',
    label: 'Sunset and Sunrise',
    pattern: 'sun-arcs',
    height: 390,
    width: 66,
    color: 'var(--tangerine)',
    fontFamily: 'var(--font-book-3)',
    fontScale: 1.1,
  },
  {
    id: 'moon-and-night-sky',
    label: 'Moon and Night Sky',
    pattern: 'stars-moon',
    height: 460,
    width: 78,
    color: 'var(--sea-blue)',
    fontFamily: 'var(--font-book-4)',
    fontScale: 1.4,
  },
  {
    id: 'flowers-and-trees',
    label: 'Flowers and Trees',
    pattern: 'flowers',
    height: 420,
    width: 74,
    color: 'var(--lilac)',
    fontFamily: 'var(--font-book-5)',
    fontScale: 1.0,
  },
  {
    id: 'cafe-coffee-and-food',
    label: 'Café, Coffee and Food',
    pattern: 'checkerboard',
    height: 500,
    width: 88,
    color: 'var(--honey-drizzle)',
    fontFamily: 'var(--font-book-6)',
    fontScale: 0.85,
  },
  {
    id: 'water-ocean-and-river',
    label: 'Water, Ocean and River',
    pattern: 'waves',
    height: 370,
    width: 64,
    color: 'var(--sky)',
    fontFamily: 'var(--font-book-7)',
    fontScale: 0.8,
  },
  {
    id: 'streets',
    label: 'Streets',
    pattern: 'dashed-road',
    height: 470,
    width: 70,
    color: 'var(--coffee-grounds)',
    fontFamily: 'var(--font-book-8)',
    fontScale: 0.8,
  },
  {
    id: 'cars-and-bikes',
    label: 'Cars and Bikes',
    pattern: 'wheels',
    height: 410,
    width: 84,
    color: 'var(--poppy)',
    fontFamily: 'var(--font-book-9)',
    fontScale: 0.95,
  },
  {
    id: 'mountains-and-nature',
    label: 'Mountains and Nature',
    pattern: 'mountains',
    height: 450,
    width: 76,
    color: 'var(--matcha)',
    fontFamily: 'var(--font-book-10)',
    fontScale: 0.9,
  },
];
