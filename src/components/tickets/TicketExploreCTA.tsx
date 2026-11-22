import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

interface TicketExploreCTAProps {
  onPress: () => void;
}

export function TicketExploreCTA({ onPress }: TicketExploreCTAProps) {
  return (
    <View className="relative mx-5 mb-2 mt-8 overflow-hidden rounded-[24px] bg-navy p-5">
      <View className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[22px] border-white/10" />
      <View className="absolute -bottom-12 right-10 h-32 w-32 rounded-full border-[16px] border-white/5" />

      <View className="flex-row flex-wrap items-center gap-3">
        <View className="min-w-[150px] flex-1 flex-row items-center gap-3">
          <Ionicons name="ticket-outline" size={34} color={colors.white} />

          <View className="flex-1">
            <Text className="text-[20px] font-bold leading-[25px] text-white">
              Belum punya tiket?
            </Text>
            <Text className="mt-1 text-[13px] leading-[18px] text-white/80">
              Jelajahi semua konser yang tersedia
            </Text>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Jelajahi semua konser"
          onPress={onPress}
          className="h-11 shrink-0 flex-row items-center gap-1.5 rounded-full bg-coral px-4 active:opacity-90">
          <Text className="text-[13px] font-semibold text-white">Jelajahi Sekarang</Text>
          <Ionicons name="arrow-forward" size={14} color={colors.white} />
        </Pressable>
      </View>
    </View>
  );
}
