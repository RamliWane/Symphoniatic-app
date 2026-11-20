import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import type { ConcertHighlight } from '@/types/concert';

interface ConcertHighlightsProps {
  highlights: ConcertHighlight[];
}

export function ConcertHighlights({ highlights }: ConcertHighlightsProps) {
  return (
    <View className="mt-9">
      <Text className="text-[22px] font-bold text-navy">Highlight Acara</Text>

      <View className="mt-4 flex-row gap-3">
        {highlights.map((highlight) => (
          <View
            key={highlight.id}
            className="flex-1 items-center gap-2.5 rounded-[20px] bg-surface p-4">
            <Ionicons name={highlight.icon} size={28} color={colors.navy} />
            <Text className="text-center text-[14px] font-medium leading-5 text-navy">
              {highlight.label}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}
