import { ScrollView } from 'react-native';

import { ConcertCard, CONCERT_CARD_WIDTH } from '@/components/home/ConcertCard';
import { trendingConcerts } from '@/data/concerts';
import type { Concert } from '@/types/concert';

const CARD_GAP = 14;
/** Extra right padding so the next card visibly peeks at the screen edge. */
const LIST_EDGE_PADDING = 34;

interface TrendingConcertsProps {
  concerts?: Concert[];
  onPressConcert?: (concert: Concert) => void;
}

export function TrendingConcerts({
  concerts = trendingConcerts,
  onPressConcert,
}: TrendingConcertsProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={CONCERT_CARD_WIDTH + CARD_GAP}
      decelerationRate="fast"
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingRight: LIST_EDGE_PADDING,
        gap: CARD_GAP,
      }}>
      {concerts.map((concert) => (
        <ConcertCard key={concert.id} concert={concert} onPress={onPressConcert} />
      ))}
    </ScrollView>
  );
}
