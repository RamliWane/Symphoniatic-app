import type { Concert } from '@/types/concert';

/**
 * Mock events for visual development only.
 * Replace with real data from the events source when it becomes available.
 */
export const trendingConcerts: Concert[] = [
  {
    id: 'niki-buzz-world-tour',
    artist: 'NIKI',
    tourName: 'Buzz World Tour',
    date: '24 Agu 2026',
    time: '19.00 WIB',
    venue: 'Jakarta Convention Center',
    city: 'Jakarta',
    priceFrom: 850000,
    category: 'konser',
    badge: 'TRENDING',
  },
  {
    id: 'hindia-ruang-pertemuan',
    artist: 'Hindia',
    tourName: 'Ruang Pertemuan',
    date: '12 Sep 2026',
    time: '19.30 WIB',
    venue: 'Istora Senayan, Jakarta',
    city: 'Jakarta',
    priceFrom: 650000,
    category: 'konser',
    badge: 'LAST TICKETS',
  },
  {
    id: 'the-rose-heal-the-world',
    artist: 'The Rose',
    tourName: 'Heal The World',
    date: '20 Sep 2026',
    time: '20.00 WIB',
    venue: 'Jakarta',
    city: 'Jakarta',
    priceFrom: 1200000,
    category: 'konser',
    badge: 'TRENDING',
  },
];

export const recommendedConcerts: Concert[] = [
  {
    id: 'symphony-concert-2025',
    artist: 'Symphony Concert 2025',
    tourName: 'Jakarta Symphony Orchestra',
    date: '12 Des 2025',
    time: '19.00 WIB',
    venue: 'Balai Sidang Jakarta',
    city: 'Jakarta',
    priceFrom: 650000,
    category: 'pertunjukan',
  },
  {
    id: 'the-romantic-concert',
    artist: 'The Romantic Concert',
    tourName: 'Orkestra Klasik',
    date: '20 Sep 2025',
    time: '19.00 WIB',
    venue: 'Teater Jakarta',
    city: 'Jakarta',
    priceFrom: 1200000,
    category: 'pertunjukan',
  },
];

export const festivalConcerts: Concert[] = [
  {
    id: 'soundscape-festival-2026',
    artist: 'Soundscape Festival 2026',
    tourName: 'Music Festival',
    date: '5 Okt 2026',
    time: '15.00 WIB',
    venue: 'Gelora Bung Karno',
    city: 'Jakarta',
    priceFrom: 450000,
    category: 'festival',
  },
];

export const allConcerts: Concert[] = [
  ...trendingConcerts,
  ...recommendedConcerts,
  ...festivalConcerts,
];
