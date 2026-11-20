import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import type { ConcertVenue } from '@/types/concert';

interface ConcertInfoPanelProps {
  date: string;
  time: string;
  venue: ConcertVenue;
}

export function ConcertInfoPanel({ date, time, venue }: ConcertInfoPanelProps) {
  return (
    <View className="mt-6 flex-row items-center rounded-[24px] bg-surface px-5 py-5">
      <View className="flex-1 flex-row items-center gap-3">
        <Ionicons name="calendar-outline" size={24} color={colors.navy} />
        <View className="flex-1">
          <Text className="text-[16px] font-semibold text-navy">{date}</Text>
          <Text className="mt-0.5 text-[13px] text-muted">{time}</Text>
        </View>
      </View>

      <View className="mx-3 h-[52px] w-px bg-line" />

      <View className="flex-1 flex-row items-center gap-3">
        <Ionicons name="location-outline" size={24} color={colors.navy} />
        <View className="flex-1">
          <Text className="text-[16px] font-semibold leading-5 text-navy">{venue.name}</Text>
          <Text className="mt-0.5 text-[13px] text-muted">{venue.city}</Text>
        </View>
      </View>
    </View>
  );
}
