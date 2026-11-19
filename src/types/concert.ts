import type { ImageSourcePropType } from 'react-native';

export type ConcertBadge = 'TRENDING' | 'LAST TICKETS';

export interface Concert {
  id: string;
  artist: string;
  tourName: string;
  /** Display date, e.g. "24 Agu 2026" */
  date: string;
  venue: string;
  /** Cheapest ticket price in IDR */
  priceFrom: number;
  /** Optional card artwork; falls back to a neutral placeholder when missing */
  image?: ImageSourcePropType;
  badge?: ConcertBadge;
}
