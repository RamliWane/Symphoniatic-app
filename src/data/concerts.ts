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
    venue: 'Jakarta Convention Center',
    priceFrom: 850000,
    badge: 'TRENDING',
  },
  {
    id: 'hindia-ruang-pertemuan',
    artist: 'Hindia',
    tourName: 'Ruang Pertemuan',
    date: '12 Sep 2026',
    venue: 'Istora Senayan, Jakarta',
    priceFrom: 650000,
    badge: 'LAST TICKETS',
  },
  {
    id: 'the-rose-heal-the-world',
    artist: 'The Rose',
    tourName: 'Heal The World',
    date: '20 Sep 2026',
    venue: 'Jakarta',
    priceFrom: 1200000,
    badge: 'TRENDING',
  },
];
