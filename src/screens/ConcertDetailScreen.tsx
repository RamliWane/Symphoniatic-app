import { useRouter } from 'expo-router';
import type { Href } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, Share, View } from 'react-native';

import { ConcertAbout } from '@/components/concert-detail/ConcertAbout';
import { ConcertDetailTabs } from '@/components/concert-detail/ConcertDetailTabs';
import { ConcertHero } from '@/components/concert-detail/ConcertHero';
import { ConcertHighlights } from '@/components/concert-detail/ConcertHighlights';
import { ConcertInfoPanel } from '@/components/concert-detail/ConcertInfoPanel';
import { ConcertOverview } from '@/components/concert-detail/ConcertOverview';
import { ConcertPriceSection } from '@/components/concert-detail/ConcertPriceSection';
import {
  ConcertCategoryTab,
  ConcertFaqTab,
  ConcertLocationTab,
} from '@/components/concert-detail/ConcertTabContent';
import { StickyPurchaseBar } from '@/components/concert-detail/StickyPurchaseBar';
import type { ConcertDetail, ConcertTab } from '@/types/concert';

interface ConcertDetailScreenProps {
  concert: ConcertDetail;
}

export default function ConcertDetailScreen({ concert }: ConcertDetailScreenProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<ConcertTab>('about');
  const [isFavorite, setIsFavorite] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleBack = () => {
    if (router.canGoBack()) {
      router.back();
      return;
    }

    router.replace('/' as Href);
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `${concert.artist} — ${concert.tourName} · ${concert.date} · ${concert.venue.name}, ${concert.venue.city}`,
      });
    } catch {
      // Share sheet was dismissed or is unavailable on this platform.
    }
  };

  const handleBuyTickets = () => {
    Alert.alert(
      'Beli Tiket',
      'Halaman pemilihan tiket belum tersedia. Fitur ini akan segera hadir.',
    );
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 28 }}>
        <ConcertHero
          concert={concert}
          isFavorite={isFavorite}
          onBack={handleBack}
          onShare={handleShare}
          onToggleFavorite={() => setIsFavorite((previous) => !previous)}
        />

        <View className="px-6">
          <ConcertOverview
            artist={concert.artist}
            tourName={concert.tourName}
            description={concert.description}
          />

          <ConcertInfoPanel date={concert.date} time={concert.time} venue={concert.venue} />

          <ConcertPriceSection priceFrom={concert.priceFrom} onBuy={handleBuyTickets} />
        </View>

        <ConcertDetailTabs activeTab={activeTab} onChange={setActiveTab} />

        <View className="px-6">
          {activeTab === 'about' && (
            <>
              <ConcertAbout
                description={concert.longDescription}
                expanded={isDescriptionExpanded}
                onToggle={() => setIsDescriptionExpanded((previous) => !previous)}
              />
              <ConcertHighlights highlights={concert.highlights} />
            </>
          )}

          {activeTab === 'location' && (
            <ConcertLocationTab
              date={concert.date}
              time={concert.time}
              venue={concert.venue}
            />
          )}

          {activeTab === 'category' && <ConcertCategoryTab category={concert.category} />}

          {activeTab === 'faq' && <ConcertFaqTab items={concert.faq} />}
        </View>
      </ScrollView>

      <StickyPurchaseBar priceFrom={concert.priceFrom} onBuy={handleBuyTickets} />
    </View>
  );
}
