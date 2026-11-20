import { Ionicons } from '@expo/vector-icons';
import type { TabTriggerSlotProps } from 'expo-router/ui';
import { Pressable, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import type { IoniconsName } from '@/types/genre';

export interface BottomNavigationItemData {
  name: string;
  href: '/' | '/tickets' | '/education' | '/profile';
  label: string;
  icon: IoniconsName;
}

type BottomNavigationItemProps = BottomNavigationItemData & Omit<TabTriggerSlotProps, 'ref'>;

export function BottomNavigationItem({
  label,
  icon,
  isFocused,
  ...props
}: BottomNavigationItemProps) {
  const isActive = Boolean(isFocused);

  return (
    <Pressable
      {...props}
      accessibilityRole="tab"
      accessibilityState={{ selected: isActive }}
      className="flex-1 active:opacity-70">
      <View className="w-full items-center pb-2 pt-2.5">
        <Ionicons name={icon} size={24} color={isActive ? colors.navy : colors.muted} />
        <Text
          numberOfLines={1}
          className={`mt-1.5 text-[12px] leading-4 ${
            isActive ? 'font-medium text-navy' : 'font-normal text-muted'
          }`}>
          {label}
        </Text>
        <View
          className={`mt-2 h-[3px] w-[52px] rounded-full ${
            isActive ? 'bg-coral' : 'bg-transparent'
          }`}
        />
      </View>
    </Pressable>
  );
}
