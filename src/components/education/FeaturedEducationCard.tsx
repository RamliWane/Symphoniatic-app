import { Ionicons } from '@expo/vector-icons';
import { Image, Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { EDUCATION_FEATURED_IMAGE } from '@/constants/images';
import type { EducationArticle } from '@/types/education';

interface FeaturedEducationCardProps {
  article: EducationArticle;
  onPress: () => void;
}

export function FeaturedEducationCard({ article, onPress }: FeaturedEducationCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Baca artikel ${article.title.replace(/\n/g, ' ')}`}
      onPress={onPress}
      className="relative mx-5 mt-4 min-h-[310px] overflow-hidden rounded-[24px] bg-surface active:opacity-90">
      <FeaturedArtwork />

      <View className="w-[72%] p-5">
        <View className="self-start rounded-full bg-coral-soft px-3.5 py-1.5">
          <Text className="text-[12px] font-semibold tracking-[0.06em] text-coral">
            {article.badge}
          </Text>
        </View>

        <Text className="mt-3 text-[25px] font-bold leading-[31px] text-navy">{article.title}</Text>

        <Text className="mt-2.5 text-[17px] leading-[25px] text-muted">{article.description}</Text>

        <View className="mt-4 flex-row items-center gap-2">
          <Text className="text-[15px] font-semibold text-navy">Baca Selengkapnya</Text>
          <Ionicons name="arrow-forward" size={16} color={colors.navy} />
        </View>
      </View>
    </Pressable>
  );
}

function FeaturedArtwork() {
  if (EDUCATION_FEATURED_IMAGE) {
    return (
      <Image
        source={EDUCATION_FEATURED_IMAGE}
        resizeMode="cover"
        className="absolute bottom-0 right-0 top-0 w-[34%]"
      />
    );
  }

  return (
    <View className="absolute bottom-0 right-0 top-0 w-[34%] items-center justify-center overflow-hidden">
      <View className="h-48 w-48 rounded-full bg-line/40" />
      <View className="absolute h-32 w-32 rounded-full bg-coral-soft" />
      <Ionicons name="musical-notes" size={34} color={colors.navy} />
    </View>
  );
}
