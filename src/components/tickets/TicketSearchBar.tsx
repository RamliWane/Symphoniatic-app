import { Ionicons } from '@expo/vector-icons';
import type { ComponentRef, Ref } from 'react';
import { Pressable, TextInput, View } from 'react-native';

import { colors } from '@/constants/colors';

export type TicketSearchInputRef = ComponentRef<typeof TextInput>;

interface TicketSearchBarProps {
  value: string;
  onChangeText: (value: string) => void;
  onPressFilter: () => void;
  inputRef?: Ref<TicketSearchInputRef>;
}

export function TicketSearchBar({
  value,
  onChangeText,
  onPressFilter,
  inputRef,
}: TicketSearchBarProps) {
  return (
    <View className="mx-5 mt-5 h-14 flex-row items-center rounded-full border border-line bg-white pl-4 pr-2">
      <Ionicons name="search-outline" size={20} color={colors.navy} />

      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        placeholder="Cari konser, artis, atau lokasi"
        placeholderTextColor={colors.muted}
        returnKeyType="search"
        autoCorrect={false}
        className="ml-2.5 flex-1 py-0 text-[14px] text-navy"
      />

      <View className="h-6 w-px bg-line" />

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Buka filter pencarian"
        onPress={onPressFilter}
        className="ml-1.5 h-10 w-10 items-center justify-center rounded-full active:opacity-70">
        <Ionicons name="options-outline" size={20} color={colors.navy} />
      </Pressable>
    </View>
  );
}
