import { Pressable, ScrollView, Text } from 'react-native';

import type { ConcertCategory } from '@/types/concert';

export type TicketCategoryId = 'semua' | ConcertCategory;

interface TicketCategory {
  id: TicketCategoryId;
  label: string;
}

export const TICKET_CATEGORIES: TicketCategory[] = [
  { id: 'semua', label: 'Semua' },
  { id: 'konser', label: 'Konser' },
  { id: 'festival', label: 'Festival' },
  { id: 'pertunjukan', label: 'Pertunjukan' },
];

interface TicketCategoryFilterProps {
  activeCategory: TicketCategoryId;
  onChange: (category: TicketCategoryId) => void;
}

export function TicketCategoryFilter({ activeCategory, onChange }: TicketCategoryFilterProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-4"
      contentContainerStyle={{ paddingHorizontal: 20, gap: 8 }}>
      {TICKET_CATEGORIES.map((category) => {
        const isActive = category.id === activeCategory;

        return (
          <Pressable
            key={category.id}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            accessibilityLabel={`Filter ${category.label}`}
            onPress={() => onChange(category.id)}
            className={`h-10 items-center justify-center rounded-full px-4 active:opacity-80 ${
              isActive ? 'bg-navy' : 'bg-surface'
            }`}>
            <Text
              className={`text-[13px] font-semibold ${
                isActive ? 'text-white' : 'text-muted'
              }`}>
              {category.label}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
