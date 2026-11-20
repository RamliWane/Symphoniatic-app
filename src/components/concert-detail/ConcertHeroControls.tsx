import { Ionicons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import { colors } from '@/constants/colors';

interface ConcertHeroControlsProps {
  isFavorite: boolean;
  onBack: () => void;
  onShare: () => void;
  onToggleFavorite: () => void;
}

export function ConcertHeroControls({
  isFavorite,
  onBack,
  onShare,
  onToggleFavorite,
}: ConcertHeroControlsProps) {
  return (
    <View className="flex-row items-center justify-between">
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Kembali"
        onPress={onBack}
        className="h-12 w-12 items-center justify-center rounded-full bg-white active:opacity-80">
        <Ionicons name="chevron-back" size={22} color={colors.navy} />
      </Pressable>

      <View className="flex-row items-center gap-3">
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Bagikan konser"
          onPress={onShare}
          className="h-12 w-12 items-center justify-center rounded-full bg-white active:opacity-80">
          <Ionicons name="share-social-outline" size={20} color={colors.navy} />
        </Pressable>

        <Pressable
          accessibilityRole="button"
          accessibilityLabel={isFavorite ? 'Hapus dari favorit' : 'Tambahkan ke favorit'}
          onPress={onToggleFavorite}
          className="h-12 w-12 items-center justify-center rounded-full bg-white active:opacity-80">
          <Ionicons
            name={isFavorite ? 'heart' : 'heart-outline'}
            size={21}
            color={isFavorite ? colors.coral : colors.navy}
          />
        </Pressable>
      </View>
    </View>
  );
}
