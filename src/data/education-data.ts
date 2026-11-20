import type {
  EducationCategory,
  EducationCategoryContent,
  EducationCategoryId,
} from '@/types/education';

/**
 * Mock education content for visual development only.
 * Replace with real editorial content when the content source is available.
 */

export const EDUCATION_CATEGORIES: EducationCategory[] = [
  { id: 'ethics', label: 'Etika & Dress Code', icon: 'trophy-outline' },
  { id: 'composers', label: 'Komponis', icon: 'musical-notes-outline' },
  { id: 'glossary', label: 'Glosarium', icon: 'book-outline' },
];

export const EDUCATION_CONTENT: Record<EducationCategoryId, EducationCategoryContent> = {
  ethics: {
    featured: {
      badge: 'PANDUAN UTAMA',
      title: 'Etika Konser:\nHal-Hal Penting\nyang Perlu Diketahui',
      description: 'Dari dress code hingga cara berperilaku di ruang pertunjukan.',
    },
    topics: [
      {
        id: 'dress-code',
        title: 'Dress Code\ndi Konser',
        description: 'Tampil sopan dan sesuai acara.',
        icon: 'ticket-outline',
      },
      {
        id: 'composers',
        title: 'Mengenal\nKomponis',
        description: 'Tokoh besar di balik karya abadi.',
        icon: 'musical-notes-outline',
      },
      {
        id: 'glossary',
        title: 'Glosarium Musik',
        description: 'Kenali istilah-istilah musik klasik.',
        icon: 'book-outline',
      },
      {
        id: 'enjoy-tips',
        title: 'Tips Menikmati\nKonser',
        description: 'Pengalaman terbaik di setiap pertunjukan.',
        icon: 'bulb-outline',
      },
    ],
  },
  composers: {
    featured: {
      badge: 'PANDUAN UTAMA',
      title: 'Mengenal\nKomponis Besar\ndunia',
      description: 'Kisah di balik karya abadi para maestro musik klasik.',
    },
    topics: [
      {
        id: 'beethoven',
        title: 'Ludwig van\nBeethoven',
        description: 'Simfoni yang mengubah sejarah musik.',
        icon: 'person-outline',
      },
      {
        id: 'mozart',
        title: 'Wolfgang\nAmadeus Mozart',
        description: 'Kejeniusan di balik karya-karya megah.',
        icon: 'person-outline',
      },
      {
        id: 'bach',
        title: 'Johann\nSebastian Bach',
        description: 'Fondasi harmoni musik klasik.',
        icon: 'person-outline',
      },
      {
        id: 'chopin',
        title: 'Frédéric\nChopin',
        description: 'Puisi dalam permainan piano.',
        icon: 'person-outline',
      },
    ],
  },
  glossary: {
    featured: {
      badge: 'PANDUAN UTAMA',
      title: 'Glosarium\nIstilah Musik\nKlasik',
      description: 'Pahami istilah yang sering muncul di program konser.',
    },
    topics: [
      {
        id: 'allegro',
        title: 'Allegro',
        description: 'Tempo cepat dan penuh energi.',
        icon: 'book-outline',
      },
      {
        id: 'andante',
        title: 'Andante',
        description: 'Tempo berjalan yang tenang.',
        icon: 'book-outline',
      },
      {
        id: 'crescendo',
        title: 'Crescendo',
        description: 'Volume yang perlahan menguat.',
        icon: 'book-outline',
      },
      {
        id: 'fermata',
        title: 'Fermata',
        description: 'Nada yang ditahan lebih panjang.',
        icon: 'book-outline',
      },
    ],
  },
};
