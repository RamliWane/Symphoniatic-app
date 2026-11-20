import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { formatIDR } from '@/utils/format';

interface ConcertPriceSectionProps {
  priceFrom: number;
  onBuy: () => void;
}

export function ConcertPriceSection({ priceFrom, onBuy }: ConcertPriceSectionProps) {
  return (
    <View className="mt-6 flex-row items-end justify-between gap-4">
      <View className="flex-1">
        <Text className="text-[14px] text-muted">Mulai dari</Text>
        <Text className="mt-0.5 text-[30px] font-bold leading-[36px] text-navy">
          {formatIDR(priceFrom)}
        </Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Beli tiket"
        onPress={onBuy}
        className="h-[52px] flex-row items-center gap-2 rounded-full bg-coral px-5 active:opacity-90">
        <Text className="text-[16px] font-semibold text-white">Beli Tiket</Text>
        <Ionicons name="arrow-forward" size={18} color={colors.white} />
      </Pressable>
    </View>
  );
}
