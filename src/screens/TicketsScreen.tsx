import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import type { ComponentRef } from 'react';
import { useMemo, useRef, useState } from 'react';
import type { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppHeader } from '@/components/common/AppHeader';
import { ConcertCarouselIndicator } from '@/components/tickets/ConcertCarouselIndicator';
import { FeaturedConcertCard } from '@/components/tickets/FeaturedConcertCard';
import { RecommendedConcertCard } from '@/components/tickets/RecommendedConcertCard';
import { TicketCategoryFilter } from '@/components/tickets/TicketCategoryFilter';
import type { TicketCategoryId } from '@/components/tickets/TicketCategoryFilter';
import { TicketExploreCTA } from '@/components/tickets/TicketExploreCTA';
import { TicketHero } from '@/components/tickets/TicketHero';
import { TicketSearchBar } from '@/components/tickets/TicketSearchBar';
import { TicketSectionHeading } from '@/components/tickets/TicketSectionHeading';
import { colors } from '@/constants/colors';
import { allConcerts } from '@/data/concerts';
import type { Concert } from '@/types/concert';

const FEATURED_CARD_GAP = 12;
const MAX_FEATURED = 3;
const MAX_RECOMMENDATIONS = 2;

export default function TicketsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { width } = useWindowDimensions();
  const searchInputRef = useRef<ComponentRef<typeof TextInput>>(null);
  const scrollViewRef = useRef<ComponentRef<typeof ScrollView>>(null);

  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<TicketCategoryId>('semua');
  const [activeSlide, setActiveSlide] = useState(0);

  const cardWidth = Math.max(width - 40, 280);

  const filteredConcerts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return allConcerts.filter((concert) => {
      const matchesCategory = activeCategory === 'semua' || concert.category === activeCategory;
      const searchableValues = [concert.artist, concert.tourName, concert.venue, concert.city];
      const matchesQuery =
        !normalizedQuery ||
        searchableValues.some((value) => value?.toLowerCase().includes(normalizedQuery));

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const featuredConcerts = filteredConcerts.slice(0, MAX_FEATURED);
  const recommendations = filteredConcerts.slice(
    MAX_FEATURED,
    MAX_FEATURED + MAX_RECOMMENDATIONS,
  );

  const openConcert = (concert: Concert) => {
    router.push({ pathname: '/concert/[id]', params: { id: concert.id } });
  };

  const handleChangeQuery = (value: string) => {
    setQuery(value);
    setActiveSlide(0);
  };

  const handleChangeCategory = (category: TicketCategoryId) => {
    setActiveCategory(category);
    setActiveSlide(0);
  };

  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (featuredConcerts.length <= 1) {
      return;
    }

    const nextIndex = Math.round(
      event.nativeEvent.contentOffset.x / (cardWidth + FEATURED_CARD_GAP),
    );
    setActiveSlide(Math.min(Math.max(nextIndex, 0), featuredConcerts.length - 1));
  };

  const resetFilters = () => {
    setQuery('');
    setActiveCategory('semua');
    setActiveSlide(0);
    scrollViewRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <View className="flex-1 bg-white">
      <View className="bg-white" style={{ paddingTop: insets.top }}>
        <AppHeader
          onPressSearch={() => searchInputRef.current?.focus()}
          onPressNotifications={() => Alert.alert('Notifikasi', 'Belum ada notifikasi baru.')}
        />
      </View>

      <ScrollView
        ref={scrollViewRef}
        className="flex-1"
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}>
        <TicketHero />

        <TicketSearchBar
          inputRef={searchInputRef}
          value={query}
          onChangeText={handleChangeQuery}
          onPressFilter={() =>
            Alert.alert('Filter', 'Filter lanjutan akan segera tersedia di Concertora.')
          }
        />

        <TicketCategoryFilter
          activeCategory={activeCategory}
          onChange={handleChangeCategory}
        />

        <View className="mt-8">
          <TicketSectionHeading
            title="Konser Terdekat"
            actionLabel="Lihat Semua"
            onActionPress={() =>
              Alert.alert('Semua Konser', 'Daftar lengkap konser akan segera tersedia.')
            }
          />
        </View>

        {featuredConcerts.length > 0 ? (
          <>
            <ScrollView
              key={`${activeCategory}-${query}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              decelerationRate="fast"
              snapToInterval={cardWidth + FEATURED_CARD_GAP}
              contentContainerStyle={{ paddingHorizontal: 20, gap: FEATURED_CARD_GAP }}
              onMomentumScrollEnd={handleScrollEnd}
              className="mt-4">
              {featuredConcerts.map((concert) => (
                <FeaturedConcertCard
                  key={concert.id}
                  concert={concert}
                  width={cardWidth}
                  onPress={() => openConcert(concert)}
                />
              ))}
            </ScrollView>

            {featuredConcerts.length > 1 && (
              <ConcertCarouselIndicator
                count={featuredConcerts.length}
                activeIndex={Math.min(activeSlide, featuredConcerts.length - 1)}
              />
            )}
          </>
        ) : (
          <View className="mx-5 mt-4 h-[160px] items-center justify-center gap-2 rounded-[24px] border border-dashed border-line bg-surface">
            <Ionicons name="search-outline" size={26} color={colors.muted} />
            <Text className="text-[13px] text-muted">Konser tidak ditemukan.</Text>
          </View>
        )}

        {recommendations.length > 0 && (
          <>
            <View className="mt-8">
              <TicketSectionHeading title="Rekomendasi Untukmu" />
            </View>

            <View className="mt-4 gap-3 px-5">
              {recommendations.map((concert) => (
                <RecommendedConcertCard
                  key={concert.id}
                  concert={concert}
                  onPress={() => openConcert(concert)}
                />
              ))}
            </View>
          </>
        )}

        <TicketExploreCTA onPress={resetFilters} />
      </ScrollView>
    </View>
  );
}
