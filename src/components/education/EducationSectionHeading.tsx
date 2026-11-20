import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

interface EducationSectionHeadingProps {
  label: string;
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
}

export function EducationSectionHeading({
  label,
  title,
  actionLabel,
  onActionPress,
}: EducationSectionHeadingProps) {
  return (
    <View className="mt-8 px-5">
      <View className="flex-row items-center gap-2">
        <View className="h-[2px] w-6 bg-coral" />
        <Text className="text-[12px] font-bold tracking-[0.12em] text-coral">{label}</Text>
      </View>

      <View className="mt-1.5 flex-row items-center justify-between">
        <Text numberOfLines={1} className="flex-1 pr-2 text-[21px] font-bold text-navy">
          {title}
        </Text>

        {actionLabel && (
          <Pressable
            accessibilityRole="button"
            onPress={onActionPress}
            hitSlop={8}
            className="shrink-0 flex-row items-center gap-1 active:opacity-60">
            <Text className="text-[13px] font-semibold text-navy">{actionLabel}</Text>
            <Ionicons name="arrow-forward" size={13} color={colors.navy} />
          </Pressable>
        )}
      </View>
    </View>
  );
}
