import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { formatIDR } from '@/utils/format';
import type { Concert } from '@/types/concert';

export const CONCERT_CARD_WIDTH = 264;

interface ConcertCardProps {
  concert: Concert;
  onPress?: (concert: Concert) => void;
}

export function ConcertCard({ concert, onPress }: ConcertCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Pressable
      accessibilityLabel={`Buka detail ${concert.artist} — ${concert.tourName}`}
      onPress={() => onPress?.(concert)}
      style={{ width: CONCERT_CARD_WIDTH }}
      className="overflow-hidden rounded-2xl border border-line bg-white active:opacity-90">
      <Artwork concert={concert}>
        {concert.badge && (
          <View className="absolute left-3 top-3 rounded-full bg-coral-soft px-2.5 py-1">
            <Text className="text-[10px] font-bold tracking-[0.08em] text-coral">
              {concert.badge}
            </Text>
          </View>
        )}

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={isFavorite ? 'Hapus dari favorit' : 'Tambahkan ke favorit'}
          onPress={() => setIsFavorite((previous) => !previous)}
          className="absolute right-3 top-3 h-8 w-8 items-center justify-center rounded-full border border-line bg-white active:opacity-80">
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={16}
            color={isFavorite ? colors.coral : colors.muted}
          />
        </Pressable>
      </Artwork>

      <View className="gap-1.5 p-4">
        <Text className="text-[15px] font-bold text-navy">{concert.artist}</Text>
        <Text className="text-[13px] text-muted">{concert.tourName}</Text>

        <View className="mt-1 flex-row items-center gap-1.5">
          <Ionicons name="calendar-outline" size={13} color={colors.muted} />
          <Text className="text-[11px] text-muted">{concert.date}</Text>
        </View>

        <View className="flex-row items-center gap-1.5">
          <Ionicons name="location-outline" size={13} color={colors.muted} />
          <Text className="flex-1 text-[11px] text-muted" numberOfLines={1}>
            {concert.venue}
          </Text>
        </View>

        <View className="mt-1 flex-row items-center justify-between border-t border-line pt-3">
          <View>
            <Text className="text-[10px] text-muted">Mulai dari</Text>
            <Text className="text-[14px] font-bold text-navy">{formatIDR(concert.priceFrom)}</Text>
          </View>

          <View className="h-9 w-9 items-center justify-center rounded-full border border-line">
            <Ionicons name="arrow-forward" size={15} color={colors.navy} />
          </View>
        </View>
      </View>
    </Pressable>
  );
}

function Artwork({ concert, children }: { concert: Concert; children: React.ReactNode }) {
  if (concert.image) {
    return (
      <View className="relative">
        <Image source={concert.image} resizeMode="cover" className="h-36 w-full" />
        {children}
      </View>
    );
  }

  return (
    <View className="relative h-36 w-full items-center justify-center border-b border-line bg-surface">
      <Ionicons name="musical-notes" size={36} color={colors.muted} />
      {children}
    </View>
  );
}
