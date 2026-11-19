import { Ionicons } from '@expo/vector-icons';
import { Pressable, View } from 'react-native';

import { colors } from '@/constants/colors';
import type { IoniconsName } from '@/types/genre';

interface IconButtonProps {
  icon: IoniconsName;
  onPress?: () => void;
  /** Small coral dot, e.g. unread notification indicator */
  showDot?: boolean;
}

export function IconButton({ icon, onPress, showDot = false }: IconButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      className="h-10 w-10 items-center justify-center rounded-full border border-line bg-surface active:opacity-70">
      <Ionicons name={icon} size={18} color={colors.navy} />
      {showDot && <View className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-coral" />}
    </Pressable>
  );
}
