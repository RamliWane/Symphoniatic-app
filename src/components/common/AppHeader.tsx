import { Text, View } from 'react-native';

import { IconButton } from '@/components/common/IconButton';

interface AppHeaderProps {
  /** Notification bell dot */
  hasUnreadNotifications?: boolean;
  onPressSearch?: () => void;
  onPressNotifications?: () => void;
}

export function AppHeader({
  hasUnreadNotifications = true,
  onPressSearch,
  onPressNotifications,
}: AppHeaderProps) {
  return (
    <View className="flex-row items-center justify-between px-5 pb-3 pt-2">
      <Text className="text-[22px] font-bold tracking-tight text-navy">
        Concerto<Text className="text-coral">ra</Text>
      </Text>

      <View className="flex-row items-center gap-3">
        <IconButton icon="search-outline" onPress={onPressSearch} />
        <IconButton
          icon="notifications-outline"
          onPress={onPressNotifications}
          showDot={hasUnreadNotifications}
        />
      </View>
    </View>
  );
}
