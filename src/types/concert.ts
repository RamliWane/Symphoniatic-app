import type { ImageSourcePropType } from 'react-native';

import type { IoniconsName } from '@/types/genre';

export type ConcertBadge = 'TRENDING' | 'LAST TICKETS';

export type ConcertCategory = 'konser' | 'festival' | 'pertunjukan';

export interface Concert {
  id: string;
  artist: string;
  tourName: string;
  /** Display date, e.g. "24 Agu 2026" */
  date: string;
  /** Display time, e.g. "19.00 WIB" */
  time?: string;
  venue: string;
  city?: string;
  /** Cheapest ticket price in IDR */
  priceFrom: number;
  category?: ConcertCategory;
  /** Optional card artwork; falls back to a neutral placeholder when missing */
  image?: ImageSourcePropType;
  badge?: ConcertBadge;
}

export interface ConcertVenue {
  name: string;
  city: string;
}

export interface ConcertHighlight {
  id: string;
  icon: IoniconsName;
  label: string;
}

export interface ConcertFaqItem {
  id: string;
  question: string;
  answer: string;
}

export type ConcertTab = 'about' | 'location' | 'category' | 'faq';

export interface ConcertDetail extends Omit<Concert, 'venue' | 'category'> {
  /** Display time, e.g. "Senin, 19.00 WIB" */
  time: string;
  venue: ConcertVenue;
  description: string;
  longDescription: string;
  category: string;
  highlights: ConcertHighlight[];
  faq: ConcertFaqItem[];
}
