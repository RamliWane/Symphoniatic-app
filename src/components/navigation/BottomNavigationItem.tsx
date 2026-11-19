import { Ionicons } from '@expo/vector-icons';
import { TabTrigger, type TabTriggerSlotProps } from 'expo-router/ui';
import { Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import type { IoniconsName } from '@/types/genre';

export interface BottomNavigationItemData {
  name: string;
  href: '/' | '/tickets' | '/education' | '/profile';
  label: string;
  icon: IoniconsName;
}

type BottomNavigationItemProps = BottomNavigationItemData & TabTriggerSlotProps;

export function BottomNavigationItem({
  name,
  href,
  label,
  icon,
  isFocused,
  ...props
}: BottomNavigationItemProps) {
  const isActive = Boolean(isFocused);
  const tint = isActive ? colors.navy : colors.muted;

  return (
    <TabTrigger name={name} href={href} asChild {...props}>
      <View
        accessibilityRole="tab"
        accessibilityState={{ selected: isActive }}
        className="flex-1 items-center gap-0.5 pb-2 pt-2.5 active:opacity-70">
        <Ionicons name={icon} size={21} color={tint} />
        <Text className="text-[10px] font-semibold" style={{ color: tint }}>
          {label}
        </Text>
        <View
          className="mt-0.5 h-[3px] w-7 rounded-full"
          style={{ backgroundColor: isActive ? colors.coral : 'transparent' }}
        />
      </View>
    </TabTrigger>
  );
}
