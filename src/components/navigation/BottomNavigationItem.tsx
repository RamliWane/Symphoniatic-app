import { Ionicons } from '@expo/vector-icons';
import { TabTrigger, type TabTriggerSlotProps } from 'expo-router/ui';
import { Pressable, Text, View } from 'react-native';

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

  return (
    <TabTrigger name={name} href={href} asChild {...props}>
      <Pressable
        accessibilityRole="tab"
        accessibilityState={{ selected: isActive }}
        className="flex-1 items-center justify-center pb-2 pt-2.5 active:opacity-70">
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
      </Pressable>
    </TabTrigger>
  );
}
