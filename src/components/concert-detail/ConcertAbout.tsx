import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

interface ConcertAboutProps {
  description: string;
  expanded: boolean;
  onToggle: () => void;
}

export function ConcertAbout({ description, expanded, onToggle }: ConcertAboutProps) {
  return (
    <View className="mt-9">
      <Text className="text-[26px] font-bold text-navy">Tentang Konser</Text>

      <Text
        numberOfLines={expanded ? undefined : 4}
        className="mt-4 text-[17px] leading-[27px] text-muted">
        {description}
      </Text>

      <Pressable
        accessibilityRole="button"
        onPress={onToggle}
        className="mt-3 flex-row items-center gap-2 self-start active:opacity-70">
        <Text className="text-[16px] font-semibold text-navy">
          {expanded ? 'Tampilkan Lebih Sedikit' : 'Baca Selengkapnya'}
        </Text>
        <Ionicons name={expanded ? 'chevron-up' : 'chevron-down'} size={18} color={colors.navy} />
      </Pressable>
    </View>
  );
}
