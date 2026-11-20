import { View } from 'react-native';

import { EducationTopicCard } from '@/components/education/EducationTopicCard';
import type { EducationTopic } from '@/types/education';

interface PopularEducationTopicsProps {
  topics: EducationTopic[];
  onPressTopic: (topic: EducationTopic) => void;
}

export function PopularEducationTopics({ topics, onPressTopic }: PopularEducationTopicsProps) {
  const rows = [topics.slice(0, 2), topics.slice(2, 4)].filter((row) => row.length > 0);

  return (
    <View className="mt-4 gap-4 px-5">
      {rows.map((row) => (
        <View key={row.map((topic) => topic.id).join('-')} className="flex-row gap-4">
          {row.map((topic) => (
            <EducationTopicCard
              key={topic.id}
              topic={topic}
              onPress={() => onPressTopic(topic)}
            />
          ))}
        </View>
      ))}
    </View>
  );
}
