import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

interface HomeCTAProps {
  /** Wired to the concert list page once the route exists. */
  onPress?: () => void;
}

export function HomeCTA({ onPress }: HomeCTAProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      className="mx-5 mb-4 overflow-hidden rounded-2xl bg-navy p-5 active:opacity-90">
      <DecorCircles />

      <Text className="text-[18px] font-bold text-white">Sudah siap menikmati pertunjukan?</Text>
      <Text className="mt-1.5 text-[13px] leading-[19px] text-white/70">
        Jelajahi konser berikutnya dan rasakan pengalaman musik secara langsung.
      </Text>

      <View className="mt-4 self-start flex-row items-center gap-1.5 rounded-full bg-coral px-5 py-3">
        <Text className="text-[14px] font-bold text-white">Jelajahi Konser</Text>
        <Ionicons name="arrow-forward" size={14} color="#FFFFFF" />
      </View>
    </Pressable>
  );
}

function DecorCircles() {
  return (
    <>
      <View className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/5" />
      <View className="absolute -bottom-12 right-10 h-24 w-24 rounded-full bg-white/5" />
    </>
  );
}
