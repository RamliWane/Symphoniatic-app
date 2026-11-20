import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import type { EducationTopic } from '@/types/education';

interface EducationTopicCardProps {
  topic: EducationTopic;
  onPress: () => void;
}

export function EducationTopicCard({ topic, onPress }: EducationTopicCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={topic.title.replace(/\n/g, ' ')}
      onPress={onPress}
      className="min-h-[184px] flex-1 flex-col justify-between rounded-[22px] bg-surface p-5 active:opacity-80">
      <View className="flex-row gap-2.5">
        <Ionicons name={topic.icon} size={32} color={colors.navy} />

        <View className="flex-1">
          <Text className="text-[17px] font-semibold leading-[22px] text-navy">{topic.title}</Text>
          <Text className="mt-2 text-[13px] leading-[19px] text-muted">{topic.description}</Text>
        </View>
      </View>

      <View className="mt-3 flex-row justify-end">
        <View className="h-9 w-9 items-center justify-center rounded-full bg-navy">
          <Ionicons name="arrow-forward" size={16} color={colors.white} />
        </View>
      </View>
    </Pressable>
  );
}
