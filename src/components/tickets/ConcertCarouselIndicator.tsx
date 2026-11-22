import { View } from 'react-native';

interface ConcertCarouselIndicatorProps {
  count: number;
  activeIndex: number;
}

export function ConcertCarouselIndicator({ count, activeIndex }: ConcertCarouselIndicatorProps) {
  return (
    <View className="mt-3 flex-row items-center justify-center gap-1.5">
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          className={`h-2 rounded-full ${index === activeIndex ? 'w-5 bg-coral' : 'w-2 bg-line'}`}
        />
      ))}
    </View>
  );
}
