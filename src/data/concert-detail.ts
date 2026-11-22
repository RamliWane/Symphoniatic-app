import { allConcerts } from '@/data/concerts';
import type {
  Concert,
  ConcertCategory,
  ConcertDetail,
  ConcertFaqItem,
  ConcertHighlight,
} from '@/types/concert';

const CATEGORY_LABELS: Record<ConcertCategory, string> = {
  konser: 'Konser Musik',
  festival: 'Festival Musik',
  pertunjukan: 'Pertunjukan',
};

/**
 * Mock detail content for visual development only.
 * Replace with real event data when the events source becomes available.
 */

const DEFAULT_HIGHLIGHTS: ConcertHighlight[] = [
  { id: 'special-performance', icon: 'star', label: 'Penampilan Spesial' },
  { id: 'best-setlist', icon: 'musical-notes', label: 'Setlist Hits Terbaik' },
  { id: 'premium-experience', icon: 'people', label: 'Pengalaman Konser Premium' },
];

const DEFAULT_FAQ: ConcertFaqItem[] = [
  {
    id: 'purchase',
    question: 'Apakah tiket bisa dibeli di lokasi?',
    answer:
      'Tiket hanya tersedia secara online melalui aplikasi Concertora selama persediaan masih ada.',
  },
  {
    id: 'age',
    question: 'Berapa usia minimum penonton?',
    answer:
      'Semua usia diperbolehkan. Penonton di bawah 12 tahun harus didampingi oleh orang tua atau wali.',
  },
  {
    id: 'items',
    question: 'Apakah ada aturan barang bawaan?',
    answer:
      'Tas berukuran besar, senjata, dan makanan atau minuman dari luar tidak diperbolehkan masuk ke area konser.',
  },
];

const CONCERT_DETAILS: Record<string, ConcertDetail> = {
  'niki-buzz-world-tour': {
    id: 'niki-buzz-world-tour',
    artist: 'NIKI',
    tourName: 'Buzz World Tour',
    date: '24 Agu 2026',
    time: 'Senin, 19.00 WIB',
    venue: { name: 'Jakarta Convention Center', city: 'Jakarta' },
    priceFrom: 850000,
    badge: 'TRENDING',
    description: 'Saksikan penampilan memukau NIKI dalam konser tur dunianya di Jakarta!',
    longDescription:
      'NIKI kembali hadir di Jakarta dalam rangkaian tur dunianya, Buzz World Tour. Dengan suara khas dan penampilan yang memukau, konser ini akan menjadi pengalaman tak terlupakan bagi para penggemar.',
    category: 'Pop',
    highlights: [
      { id: 'special-performance', icon: 'star', label: 'Penampilan Spesial NIKI' },
      { id: 'best-setlist', icon: 'musical-notes', label: 'Setlist Hits Terbaik' },
      { id: 'premium-experience', icon: 'people', label: 'Pengalaman Konser Premium' },
    ],
    faq: DEFAULT_FAQ,
  },
};

export function getConcertDetail(id: string | undefined): ConcertDetail | null {
  if (!id) {
    return null;
  }

  const detail = CONCERT_DETAILS[id];
  if (detail) {
    return detail;
  }

  const concert = allConcerts.find((item) => item.id === id);
  return concert ? createFallbackDetail(concert) : null;
}

function createFallbackDetail(concert: Concert): ConcertDetail {
  return {
    ...concert,
    time: concert.time ?? '19.00 WIB',
    venue: { name: concert.venue, city: concert.city ?? 'Jakarta' },
    description: `Saksikan penampilan ${concert.artist} dalam tur ${concert.tourName} di Jakarta!`,
    longDescription: `${concert.artist} kembali hadir di Jakarta dalam rangkaian tur ${concert.tourName}. Nikmati penampilan terbaik dan suasana konser yang tak terlupakan bersama para penggemar.`,
    category: concert.category ? CATEGORY_LABELS[concert.category] : 'Musik',
    highlights: DEFAULT_HIGHLIGHTS,
    faq: DEFAULT_FAQ,
  };
}
