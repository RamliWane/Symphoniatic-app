import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import type { ConcertFaqItem, ConcertVenue } from '@/types/concert';
import type { IoniconsName } from '@/types/genre';

interface ConcertLocationTabProps {
  date: string;
  time: string;
  venue: ConcertVenue;
}

const LOCATION_ROWS: { icon: IoniconsName; label: string }[] = [
  { icon: 'calendar-outline', label: 'Tanggal' },
  { icon: 'time-outline', label: 'Waktu' },
  { icon: 'location-outline', label: 'Venue' },
  { icon: 'map-outline', label: 'Kota' },
];

export function ConcertLocationTab({ date, time, venue }: ConcertLocationTabProps) {
  const values = [date, time, venue.name, venue.city];

  return (
    <View className="mt-9">
      <Text className="text-[24px] font-bold text-navy">Lokasi & Jadwal</Text>

      <View className="mt-4 gap-4 rounded-[24px] bg-surface p-5">
        {LOCATION_ROWS.map((row, index) => (
          <View key={row.label} className="flex-row items-start gap-3">
            <Ionicons name={row.icon} size={20} color={colors.navy} />
            <View className="flex-1">
              <Text className="text-[12px] text-muted">{row.label}</Text>
              <Text className="mt-0.5 text-[16px] font-medium text-navy">{values[index]}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

interface ConcertCategoryTabProps {
  category: string;
}

export function ConcertCategoryTab({ category }: ConcertCategoryTabProps) {
  return (
    <View className="mt-9">
      <Text className="text-[24px] font-bold text-navy">Kategori</Text>
      <Text className="mt-4 text-[17px] leading-[27px] text-muted">
        Konser ini termasuk dalam kategori berikut:
      </Text>

      <View className="mt-4 flex-row flex-wrap gap-2">
        <View className="rounded-full bg-coral-soft px-4 py-2">
          <Text className="text-[14px] font-semibold text-navy">{category}</Text>
        </View>
      </View>
    </View>
  );
}

interface ConcertFaqTabProps {
  items: ConcertFaqItem[];
}

export function ConcertFaqTab({ items }: ConcertFaqTabProps) {
  return (
    <View className="mt-9">
      <Text className="text-[24px] font-bold text-navy">FAQ</Text>

      <View className="mt-4 gap-5">
        {items.map((item) => (
          <View key={item.id}>
            <Text className="text-[16px] font-semibold text-navy">{item.question}</Text>
            <Text className="mt-1 text-[14px] leading-6 text-muted">{item.answer}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
