import type { Href } from 'expo-router';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppHeader } from '@/components/common/AppHeader';
import { EducationCategoryTabs } from '@/components/education/EducationCategoryTabs';
import { EducationCTA } from '@/components/education/EducationCTA';
import { EducationHero } from '@/components/education/EducationHero';
import { EducationSectionHeading } from '@/components/education/EducationSectionHeading';
import { FeaturedEducationCard } from '@/components/education/FeaturedEducationCard';
import { PopularEducationTopics } from '@/components/education/PopularEducationTopics';
import { EDUCATION_CATEGORIES, EDUCATION_CONTENT } from '@/data/education-data';
import type { EducationCategoryId, EducationTopic } from '@/types/education';

export default function EducationScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<EducationCategoryId>('ethics');

  const content = EDUCATION_CONTENT[activeCategory];

  const showComingSoon = (title: string) => {
    Alert.alert(title, 'Materi lengkap akan segera tersedia di Concertora.');
  };

  const handlePressTopic = (topic: EducationTopic) => {
    showComingSoon(topic.title.replace(/\n/g, ' '));
  };

  return (
    <View className="flex-1 bg-white">
      <View className="bg-white" style={{ paddingTop: insets.top }}>
        <AppHeader
          onPressSearch={() => Alert.alert('Pencarian', 'Fitur pencarian akan segera tersedia.')}
          onPressNotifications={() => Alert.alert('Notifikasi', 'Belum ada notifikasi baru.')}
        />
      </View>

      <ScrollView
        className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom + 24 }}>
        <EducationHero />

        <EducationCategoryTabs
          categories={EDUCATION_CATEGORIES}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />

        <FeaturedEducationCard
          article={content.featured}
          onPress={() => showComingSoon(content.featured.title.replace(/\n/g, ' '))}
        />

        <EducationSectionHeading
          label="TOPIK POPULER"
          title="Jelajahi Topik Lainnya"
          actionLabel="Lihat Semua"
          onActionPress={() =>
            Alert.alert('Semua Topik', 'Daftar lengkap materi edukasi akan segera tersedia.')
          }
        />

        <PopularEducationTopics topics={content.topics} onPressTopic={handlePressTopic} />

        <EducationCTA onPress={() => router.push('/' as Href)} />
      </ScrollView>
    </View>
  );
}
