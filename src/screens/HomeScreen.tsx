import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppHeader } from '@/components/common/AppHeader';
import { SectionHeading } from '@/components/common/SectionHeading';
import { EducationBanner } from '@/components/home/EducationBanner';
import { GenreSection } from '@/components/home/GenreSection';
import { HomeCTA } from '@/components/home/HomeCTA';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeSearchBar } from '@/components/home/HomeSearchBar';
import { TrendingConcerts } from '@/components/home/TrendingConcerts';

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1 bg-white">
      <View className="bg-white" style={{ paddingTop: insets.top }}>
        <AppHeader />
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}>
        <HomeHero />

        <HomeSearchBar />

        <EducationBanner />

        <SectionHeading label="SEDANG RAMAI" title="Yang Lagi Ramai" actionLabel="Lihat Semua" />
        <TrendingConcerts
          onPressConcert={(concert) =>
            router.push({ pathname: '/concert/[id]', params: { id: concert.id } })
          }
        />

        <GenreSection />

        <HomeCTA />
      </ScrollView>
    </View>
  );
}
