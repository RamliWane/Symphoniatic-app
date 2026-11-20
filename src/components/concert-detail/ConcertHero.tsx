import { Ionicons } from '@expo/vector-icons';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ConcertHeroControls } from '@/components/concert-detail/ConcertHeroControls';
import { colors } from '@/constants/colors';
import { CONCERT_DETAIL_HERO_IMAGE } from '@/constants/images';
import type { ConcertDetail } from '@/types/concert';

const HERO_MAX_HEIGHT = 520;
const HERO_SLIDES = [0, 1, 2, 3];

interface ConcertHeroProps {
  concert: ConcertDetail;
  isFavorite: boolean;
  onBack: () => void;
  onShare: () => void;
  onToggleFavorite: () => void;
}

export function ConcertHero({
  concert,
  isFavorite,
  onBack,
  onShare,
  onToggleFavorite,
}: ConcertHeroProps) {
  const insets = useSafeAreaInsets();
  const { height } = useWindowDimensions();
  const heroHeight = Math.min(HERO_MAX_HEIGHT, Math.round(height * 0.62));
  const imageSource = concert.image ?? CONCERT_DETAIL_HERO_IMAGE;

  return (
    <View
      className="relative w-full overflow-hidden rounded-b-[32px] bg-navy"
      style={{ height: heroHeight }}>
      {imageSource ? (
        <Image source={imageSource} resizeMode="cover" className="h-full w-full" />
      ) : (
        <View className="h-full w-full items-center justify-center">
          <View className="absolute h-56 w-56 rounded-full bg-white/5" />
          <Ionicons name="mic" size={72} color="rgba(255,255,255,0.3)" />
        </View>
      )}

      <View className="absolute inset-x-0 top-0 px-5" style={{ paddingTop: insets.top + 12 }}>
        <ConcertHeroControls
          isFavorite={isFavorite}
          onBack={onBack}
          onShare={onShare}
          onToggleFavorite={onToggleFavorite}
        />

        {concert.badge && (
          <View className="mt-4 flex-row items-center gap-1.5 self-start rounded-full bg-coral-soft px-3 py-1.5">
            <Ionicons name="flame" size={14} color={colors.coral} />
            <Text className="text-[12px] font-bold tracking-[0.08em] text-navy">
              {concert.badge}
            </Text>
          </View>
        )}
      </View>

      <View className="absolute bottom-6 right-6 flex-row items-center gap-1.5">
        {HERO_SLIDES.map((slide) => (
          <View
            key={slide}
            className={`h-2 w-2 rounded-full ${slide === 0 ? 'bg-coral' : 'bg-white/50'}`}
          />
        ))}
      </View>
    </View>
  );
}
