import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors } from '@/constants/colors';

type PlaceholderRoute = '/tickets' | '/education' | '/profile';

interface PlaceholderScreenProps {
  route: PlaceholderRoute;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
}

/**
 * Minimal placeholder for routes that are not part of the homepage scope yet.
 * Each screen owns its own top safe-area padding because it renders inside the
 * bottom tab layout without a shared header.
 */
function PlaceholderScreen({ route, title, description, icon }: PlaceholderScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 items-center justify-center gap-3 bg-white px-8"
      style={{ paddingTop: insets.top }}>
      <View className="h-16 w-16 items-center justify-center rounded-2xl border border-line bg-surface">
        <Ionicons name={icon} size={28} color={colors.navy} />
      </View>
      <Text className="text-[20px] font-bold text-navy">{title}</Text>
      <Text className="text-center text-[13px] leading-[19px] text-muted">{description}</Text>
      <Text className="text-[11px] text-muted" accessibilityLabel={route}>
        Segera hadir di Concertora
      </Text>
    </View>
  );
}

export function TicketsScreen() {
  return (
    <PlaceholderScreen
      route="/tickets"
      title="Tiket Saya"
      description="Tiket konser yang kamu beli akan muncul di sini."
      icon="ticket-outline"
    />
  );
}

export function EducationScreen() {
  return (
    <PlaceholderScreen
      route="/education"
      title="Edukasi"
      description="Panduan etika dan persiapan sebelum menonton konser."
      icon="book-outline"
    />
  );
}

export function ProfileScreen() {
  return (
    <PlaceholderScreen
      route="/profile"
      title="Profil"
      description="Kelola akun dan preferensi Concertora-mu."
      icon="person-outline"
    />
  );
}
