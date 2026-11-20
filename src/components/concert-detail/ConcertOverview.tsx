import { Text, View } from 'react-native';

interface ConcertOverviewProps {
  artist: string;
  tourName: string;
  description: string;
}

export function ConcertOverview({ artist, tourName, description }: ConcertOverviewProps) {
  return (
    <View className="mt-6">
      <Text className="text-[40px] font-bold leading-[46px] tracking-tight text-navy">{artist}</Text>
      <Text className="mt-1 text-[32px] font-bold leading-[38px] tracking-tight text-navy">
        {tourName}
      </Text>
      <Text className="mt-3 text-[20px] leading-[28px] text-muted">{description}</Text>
    </View>
  );
}
