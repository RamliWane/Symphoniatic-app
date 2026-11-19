import { Pressable, Text, View } from 'react-native';

interface SectionHeadingProps {
  label: string;
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
}

export function SectionHeading({ label, title, actionLabel, onActionPress }: SectionHeadingProps) {
  return (
    <View className="px-5 pb-3">
      <Text className="text-[11px] font-bold tracking-[0.12em] text-coral">{label}</Text>
      <View className="mt-1 flex-row items-center justify-between">
        <Text className="text-[20px] font-bold text-navy">{title}</Text>
        {actionLabel && (
          <Pressable
            accessibilityRole="button"
            onPress={onActionPress}
            hitSlop={8}
            className="active:opacity-60">
            <Text className="text-[13px] font-semibold text-muted">{actionLabel}</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
