import type { IoniconsName } from '@/types/genre';

export type EducationCategoryId = 'ethics' | 'composers' | 'glossary';

export interface EducationCategory {
  id: EducationCategoryId;
  label: string;
  icon: IoniconsName;
}

export interface EducationArticle {
  badge: string;
  title: string;
  description: string;
}

export interface EducationTopic {
  id: string;
  title: string;
  description: string;
  icon: IoniconsName;
}

export interface EducationCategoryContent {
  featured: EducationArticle;
  topics: EducationTopic[];
}
