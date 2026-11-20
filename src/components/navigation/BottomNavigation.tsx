import type { Href } from 'expo-router';
import { TabList, TabSlot, TabTrigger, Tabs } from 'expo-router/ui';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  BottomNavigationItem,
  type BottomNavigationItemData,
} from '@/components/navigation/BottomNavigationItem';

const TAB_ITEMS: BottomNavigationItemData[] = [
  { name: 'home', href: '/', label: 'Beranda', icon: 'home-outline' },
  { name: 'tickets', href: '/tickets', label: 'Tiket Saya', icon: 'ticket-outline' },
  { name: 'education', href: '/education', label: 'Edukasi', icon: 'school-outline' },
  { name: 'profile', href: '/profile', label: 'Profil', icon: 'person-outline' },
];

export function BottomNavigation() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs>
      <TabSlot />
      <TabList asChild>
        <View
          className="flex-row border-t border-line bg-white px-2"
          style={{ paddingBottom: insets.bottom }}>
          {TAB_ITEMS.map((item) => (
            <TabTrigger key={item.name} name={item.name} href={item.href as Href} asChild>
              <BottomNavigationItem {...item} />
            </TabTrigger>
          ))}
        </View>
      </TabList>
    </Tabs>
  );
}
