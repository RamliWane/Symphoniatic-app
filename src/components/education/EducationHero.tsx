import { Ionicons } from '@expo/vector-icons';
import { Image, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { EDUCATION_HERO_IMAGE } from '@/constants/images';

export function EducationHero() {
  return (
    <View className="relative overflow-hidden pb-6 pt-2">
      {EDUCATION_HERO_IMAGE ? (
        <Image
          source={EDUCATION_HERO_IMAGE}
          resizeMode="cover"
          className="absolute right-0 top-0 h-full w-[38%]"
        />
      ) : (
        <View className="absolute bottom-0 right-0 top-0 w-[38%] items-center justify-center">
          <View className="h-44 w-44 rounded-full bg-surface" />
          <View className="absolute h-28 w-28 rounded-full bg-coral-soft" />
          <Ionicons name="musical-notes" size={40} color={colors.navy} />
        </View>
      )}

      <View className="w-[76%] px-5">
        <View className="flex-row items-center gap-2.5">
          <View className="h-[2px] w-7 bg-coral" />
          <Text className="text-[13px] font-semibold tracking-[0.14em] text-coral">EDUKASI</Text>
        </View>

        <Text className="mt-4 text-[30px] font-bold leading-[36px] tracking-tight text-navy">
          Music Culture{'\n'}& Concert Guide
        </Text>

        <Text className="mt-3 text-[18px] leading-[26px] text-muted">
          Pelajari lebih dalam tentang dunia musik klasik dan pengalaman konser.
        </Text>
      </View>
    </View>
  );
}
