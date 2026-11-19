import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { EDUCATION_BANNER_IMAGE } from '@/constants/images';

export function EducationBanner() {
  const router = useRouter();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Buka panduan konser"
      onPress={() => router.push('/education')}
      className="mx-5 mb-8 flex-row overflow-hidden rounded-2xl border border-line bg-surface active:opacity-90">
      <View className="flex-1 p-4">
        <View className="self-start rounded-full bg-coral-soft px-2.5 py-1">
          <Text className="text-[10px] font-bold tracking-[0.08em] text-coral">
            PANDUAN KONSER
          </Text>
        </View>

        <Text className="mt-2.5 text-[16px] font-bold leading-[21px] text-navy" numberOfLines={2}>
          Etika &amp; Dress Code di Konser Klasik
        </Text>

        <View className="mt-2 flex-row items-center gap-1">
          <Text className="text-[12px] font-semibold text-coral">Pelajari Selengkapnya</Text>
          <Ionicons name="arrow-forward" size={12} color={colors.coral} />
        </View>
      </View>

      <BannerArtwork />
    </Pressable>
  );
}

function BannerArtwork() {
  if (EDUCATION_BANNER_IMAGE) {
    return <Image source={EDUCATION_BANNER_IMAGE} resizeMode="cover" className="h-full w-28" />;
  }

  return (
    <View className="w-24 items-center justify-center border-l border-line bg-white">
      <Ionicons name="book-outline" size={30} color={colors.navy} />
    </View>
  );
}
