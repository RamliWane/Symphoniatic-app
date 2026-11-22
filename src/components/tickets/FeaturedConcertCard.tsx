import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { formatIDR } from '@/utils/format';
import type { Concert } from '@/types/concert';

interface FeaturedConcertCardProps {
  concert: Concert;
  width: number;
  onPress: () => void;
}

export function FeaturedConcertCard({ concert, width, onPress }: FeaturedConcertCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Buka detail ${concert.artist}`}
      onPress={onPress}
      style={{ width }}
      className="overflow-hidden rounded-[24px] border border-line bg-white active:opacity-90">
      <View className="h-[300px] flex-row">
        <FeaturedArtwork concert={concert} />

        <View className="flex-1 justify-between p-4">
          <View>
            <View className="self-start rounded-full bg-coral-soft px-2.5 py-1">
              <Text className="text-[11px] font-bold tracking-[0.06em] text-coral">AKTIF</Text>
            </View>

            <Text numberOfLines={2} className="mt-2.5 text-[21px] font-bold leading-[26px] text-navy">
              {concert.artist}
            </Text>
            <Text numberOfLines={1} className="mt-0.5 text-[14px] font-medium text-navy">
              {concert.tourName}
            </Text>

            <View className="mt-3 gap-1.5">
              <MetaRow
                icon="calendar-outline"
                text={`${concert.date} • ${concert.time ?? '19.00 WIB'}`}
              />
              <MetaRow icon="location-outline" text={concert.venue} />
            </View>
          </View>

          <View className="flex-row items-end justify-between">
            <View>
              <Text className="text-[11px] text-muted">Mulai dari</Text>
              <Text className="text-[18px] font-bold text-navy">{formatIDR(concert.priceFrom)}</Text>
            </View>

            <View className="h-10 w-10 items-center justify-center rounded-full bg-navy">
              <Ionicons name="arrow-forward" size={17} color={colors.white} />
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

function MetaRow({ icon, text }: { icon: keyof typeof Ionicons.glyphMap; text: string }) {
  return (
    <View className="flex-row items-start gap-1.5">
      <Ionicons name={icon} size={13} color={colors.muted} />
      <Text numberOfLines={2} className="flex-1 text-[11px] leading-[15px] text-muted">
        {text}
      </Text>
    </View>
  );
}

function FeaturedArtwork({ concert }: { concert: Concert }) {
  if (concert.image) {
    return (
      <View className="h-full w-[40%]">
        <Image source={concert.image} resizeMode="cover" className="h-full w-full" />
      </View>
    );
  }

  return (
    <View className="h-full w-[40%] items-center justify-center overflow-hidden bg-navy">
      <View className="absolute h-36 w-36 rounded-full bg-white/5" />
      <View className="absolute -bottom-8 -left-8 h-28 w-28 rounded-full bg-coral/20" />
      <Ionicons name="mic-outline" size={40} color="rgba(255,255,255,0.4)" />
    </View>
  );
}
