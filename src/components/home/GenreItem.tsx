import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text } from 'react-native';

import { colors } from '@/constants/colors';
import type { Genre } from '@/types/genre';

interface GenreItemProps {
  genre: Genre;
  isActive: boolean;
  onPress: (genre: Genre) => void;
}

export function GenreItem({ genre, isActive, onPress }: GenreItemProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: isActive }}
      onPress={() => onPress(genre)}
      className={`flex-row items-center gap-2 rounded-2xl border px-4 py-2.5 active:opacity-80 ${
        isActive ? 'border-navy bg-navy' : 'border-line bg-white'
      }`}>
      <Ionicons
        name={genre.icon}
        size={16}
        color={isActive ? colors.white : colors.navy}
      />
      <Text
        className={`text-[13px] font-semibold ${isActive ? 'text-white' : 'text-navy'}`}
        numberOfLines={1}>
        {genre.label}
      </Text>
    </Pressable>
  );
}
