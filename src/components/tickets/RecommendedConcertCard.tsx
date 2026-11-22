import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { formatIDR } from '@/utils/format';
import type { Concert } from '@/types/concert';

interface RecommendedConcertCardProps {
  concert: Concert;
  onPress: () => void;
}

export function RecommendedConcertCard({ concert, onPress }: RecommendedConcertCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Buka detail ${concert.artist}`}
      onPress={onPress}
      className="flex-row items-center gap-3 rounded-[22px] border border-line bg-white p-3 active:opacity-90">
      <RecommendedArtwork concert={concert} />

      <View className="flex-1">
        <Text numberOfLines={2} className="text-[16px] font-semibold leading-[21px] text-navy">
          {concert.artist}
        </Text>

        <View className="mt-2 gap-1">
          <MetaRow
            icon="calendar-outline"
            text={`${concert.date} • ${concert.time ?? '19.00 WIB'}`}
          />
          <MetaRow icon="location-outline" text={concert.venue} />
        </View>

        <Text className="mt-1.5 text-[15px] font-semibold text-coral">
          {formatIDR(concert.priceFrom)}
        </Text>
      </View>

      <View className="h-9 w-9 items-center justify-center rounded-full bg-navy">
        <Ionicons name="arrow-forward" size={15} color={colors.white} />
      </View>
    </Pressable>
  );
}

function MetaRow({ icon, text }: { icon: keyof typeof Ionicons.glyphMap; text: string }) {
  return (
    <View className="flex-row items-center gap-1.5">
      <Ionicons name={icon} size={12} color={colors.muted} />
      <Text numberOfLines={1} className="flex-1 text-[11px] text-muted">
        {text}
      </Text>
    </View>
  );
}

function RecommendedArtwork({ concert }: { concert: Concert }) {
  if (concert.image) {
    return (
      <Image
        source={concert.image}
        resizeMode="cover"
        className="h-[112px] w-24 rounded-2xl"
      />
    );
  }

  return (
    <View className="h-[112px] w-24 items-center justify-center overflow-hidden rounded-2xl bg-surface">
      <View className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-line/60" />
      <Ionicons name="musical-notes-outline" size={28} color={colors.navy} />
    </View>
  );
}
