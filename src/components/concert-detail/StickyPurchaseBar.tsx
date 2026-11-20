import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/constants/colors';
import { formatIDR } from '@/utils/format';

interface StickyPurchaseBarProps {
  priceFrom: number;
  onBuy: () => void;
}

export function StickyPurchaseBar({ priceFrom, onBuy }: StickyPurchaseBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View className="bg-white px-4 pt-2" style={{ paddingBottom: Math.max(insets.bottom, 12) }}>
      <View className="flex-row items-center justify-between rounded-[28px] border border-line bg-white px-4 py-3 shadow-sm">
        <View className="flex-row items-center gap-2.5">
          <Ionicons name="ticket-outline" size={28} color={colors.navy} />
          <View>
            <Text className="text-[12px] text-muted">Mulai dari</Text>
            <Text className="text-[22px] font-bold text-navy">{formatIDR(priceFrom)}</Text>
          </View>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Beli tiket"
          onPress={onBuy}
          className="h-[50px] flex-row items-center gap-1.5 rounded-full bg-navy px-4 active:opacity-90">
          <Text className="text-[15px] font-semibold text-white">Beli Tiket</Text>
          <Ionicons name="arrow-forward" size={16} color={colors.white} />
        </Pressable>
      </View>
    </View>
  );
}
