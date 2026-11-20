import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

interface EducationCTAProps {
  onPress: () => void;
}

export function EducationCTA({ onPress }: EducationCTAProps) {
  return (
    <View className="mx-5 mb-2 mt-8 overflow-hidden rounded-[24px] bg-navy p-5">
      <View className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[22px] border-white/10" />
      <View className="absolute -bottom-24 right-10 h-56 w-56 rounded-full border-[18px] border-white/5" />

      <View className="flex-row flex-wrap items-center gap-x-3 gap-y-4">
        <View className="min-w-[130px] flex-1">
          <Text className="text-[21px] font-bold leading-[27px] text-white">
            Siap Menikmati{'\n'}Pertunjukan?
          </Text>
          <Text className="mt-2 text-[14px] leading-5 text-white/80">
            Temukan konser berikutnya sekarang!
          </Text>
        </View>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Jelajahi konser"
          onPress={onPress}
          className="h-[48px] shrink-0 flex-row items-center gap-1.5 rounded-full bg-coral px-4 active:opacity-90">
          <Text className="text-[14px] font-semibold text-white">Jelajahi Konser</Text>
          <Ionicons name="arrow-forward" size={15} color={colors.white} />
        </Pressable>
      </View>
    </View>
  );
}
