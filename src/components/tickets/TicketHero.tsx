import { Text, View } from 'react-native';

export function TicketHero() {
  return (
    <View className="relative overflow-hidden pb-1 pt-2">
      <View className="absolute -right-24 -top-10 h-64 w-64 rounded-full border-[26px] border-line/60" />
      <View className="absolute -right-4 top-20 h-40 w-40 rounded-full border-[18px] border-coral-soft" />

      <View className="w-[76%] px-5">
        <View className="flex-row items-center gap-2.5">
          <View className="h-[2px] w-7 bg-coral" />
          <Text className="text-[13px] font-semibold tracking-[0.14em] text-coral">TIKET</Text>
        </View>

        <Text className="mt-4 text-[32px] font-bold leading-[38px] tracking-tight text-navy">
          Temukan{'\n'}Konser Impianmu
        </Text>

        <Text className="mt-3 text-[17px] leading-[25px] text-muted">
          Dapatkan tiket konser favoritmu dengan mudah dan aman.
        </Text>
      </View>
    </View>
  );
}
