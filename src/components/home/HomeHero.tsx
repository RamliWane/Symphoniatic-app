import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { HERO_IMAGE } from '@/constants/images';

export function HomeHero() {
  return (
    <View className="flex-row items-center gap-4 px-5 pb-5 pt-1">
      <View className="flex-1">
        <Text className="text-[28px] font-bold leading-[34px] text-navy">
          Find Your Next{'\n'}
          <Text className="text-coral">Live</Text> Experience
        </Text>
        <Text className="mt-2 text-[15px] text-muted">Konser musik klasik, dekat denganmu.</Text>
      </View>

      <HeroArtwork />
    </View>
  );
}

function HeroArtwork() {
  if (HERO_IMAGE) {
    return (
      <Image
        source={HERO_IMAGE}
        resizeMode="cover"
        className="h-32 w-[104px] rounded-2xl border border-line"
      />
    );
  }

  return (
    <View className="h-32 w-[104px] items-center justify-center rounded-2xl border border-line bg-surface">
      <Ionicons name="musical-notes" size={32} color={colors.coral} />
      <Text className="mt-2 px-2 text-center text-[10px] font-semibold text-muted">
        Visual konduktor
      </Text>
    </View>
  );
}
