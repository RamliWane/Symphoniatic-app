import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import type { Href } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { getConcertDetail } from '@/data/concert-detail';
import ConcertDetailScreen from '@/screens/ConcertDetailScreen';

export default function ConcertDetailPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const concert = getConcertDetail(id);

  if (!concert) {
    return (
      <View className="flex-1 items-center justify-center gap-4 bg-white px-6">
        <Ionicons name="ticket-outline" size={40} color={colors.muted} />
        <Text className="text-center text-[16px] text-muted">Konser tidak ditemukan.</Text>
        <Pressable
          accessibilityRole="button"
          onPress={() => router.replace('/' as Href)}
          className="rounded-full bg-navy px-6 py-3 active:opacity-90">
          <Text className="text-[15px] font-semibold text-white">Kembali ke Beranda</Text>
        </Pressable>
      </View>
    );
  }

  return <ConcertDetailScreen concert={concert} />;
}
