import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';

import { colors } from '@/constants/colors';

interface HomeSearchBarProps {
  /** Connected later to the search feature; no backend is wired yet. */
  onSubmitSearch?: (query: string) => void;
}

export function HomeSearchBar({ onSubmitSearch }: HomeSearchBarProps) {
  const [query, setQuery] = useState('');

  const submit = () => onSubmitSearch?.(query.trim());

  return (
    <View className="mx-5 mb-7 flex-row items-center gap-3 rounded-full border border-line bg-white px-4 py-3">
      <Ionicons name="search" size={18} color={colors.muted} />

      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholder="Cari konser, artis, atau lokasi..."
        placeholderTextColor={colors.muted}
        returnKeyType="search"
        onSubmitEditing={submit}
        className="flex-1 text-[15px] text-navy"
      />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Cari"
        onPress={submit}
        className="h-8 w-8 items-center justify-center rounded-full bg-navy active:opacity-80">
        <Ionicons name="arrow-forward" size={16} color={colors.white} />
      </Pressable>
    </View>
  );
}
