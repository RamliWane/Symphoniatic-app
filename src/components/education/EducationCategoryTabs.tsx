import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import type { EducationCategory, EducationCategoryId } from '@/types/education';

interface EducationCategoryTabsProps {
  categories: EducationCategory[];
  activeCategory: EducationCategoryId;
  onChange: (category: EducationCategoryId) => void;
}

export function EducationCategoryTabs({
  categories,
  activeCategory,
  onChange,
}: EducationCategoryTabsProps) {
  return (
    <View className="mx-5 mt-2 flex-row rounded-full border border-line bg-surface p-1">
      {categories.map((category) => {
        const isActive = category.id === activeCategory;

        return (
          <Pressable
            key={category.id}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            onPress={() => onChange(category.id)}
            className={`relative flex-1 items-center rounded-full py-2.5 active:opacity-80 ${
              isActive ? 'bg-white' : ''
            }`}>
            <Ionicons
              name={category.icon}
              size={18}
              color={isActive ? colors.navy : colors.muted}
            />
            <Text
              numberOfLines={2}
              className={`mt-1 min-h-[32px] text-center text-[12px] leading-4 ${
                isActive ? 'font-semibold text-navy' : 'font-medium text-muted'
              }`}>
              {category.label}
            </Text>
            {isActive && (
              <View className="absolute bottom-1 h-[3px] w-[46%] rounded-full bg-coral" />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}
