import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { GenreItem } from '@/components/home/GenreItem';
import { SectionHeading } from '@/components/common/SectionHeading';
import { genres } from '@/data/genres';
import type { Genre } from '@/types/genre';

const FIRST_GENRE_ID = genres[0].id;

interface GenreSectionProps {
  /** Connected later to genre filtering; selection state is local for now. */
  onSelectGenre?: (genre: Genre) => void;
}

export function GenreSection({ onSelectGenre }: GenreSectionProps) {
  const [selectedId, setSelectedId] = useState<string>(FIRST_GENRE_ID);

  const handleSelect = (genre: Genre) => {
    setSelectedId(genre.id);
    onSelectGenre?.(genre);
  };

  return (
    <View className="mb-7">
      <SectionHeading label="JELAJAHI KATEGORI" title="Temukan Konser Favoritmu" />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}>
        {genres.map((genre) => (
          <GenreItem
            key={genre.id}
            genre={genre}
            isActive={genre.id === selectedId}
            onPress={handleSelect}
          />
        ))}
      </ScrollView>
    </View>
  );
}
