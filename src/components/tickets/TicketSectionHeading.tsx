import { Ionicons } from '@expo/vector-icons';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';

interface TicketSectionHeadingProps {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
}

export function TicketSectionHeading({
  title,
  actionLabel,
  onActionPress,
}: TicketSectionHeadingProps) {
  return (
    <View className="flex-row items-center justify-between px-5">
      <Text className="text-[22px] font-bold tracking-tight text-navy">{title}</Text>

      {actionLabel && (
        <Pressable
          accessibilityRole="button"
          accessibilityLabel={actionLabel}
          onPress={onActionPress}
          className="flex-row items-center gap-1 py-1 active:opacity-70">
          <Text className="text-[13px] font-semibold text-navy">{actionLabel}</Text>
          <Ionicons name="arrow-forward" size={13} color={colors.navy} />
        </Pressable>
      )}
    </View>
  );
}
