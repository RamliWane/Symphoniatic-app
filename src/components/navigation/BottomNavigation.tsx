import { Tabs, TabList, TabSlot } from 'expo-router/ui';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  BottomNavigationItem,
  type BottomNavigationItemData,
} from '@/components/navigation/BottomNavigationItem';

const TAB_ITEMS: BottomNavigationItemData[] = [
  { name: 'home', href: '/', label: 'Beranda', icon: 'home-outline' },
  { name: 'tickets', href: '/tickets', label: 'Tiket Saya', icon: 'ticket-outline' },
  { name: 'education', href: '/education', label: 'Edukasi', icon: 'book-outline' },
  { name: 'profile', href: '/profile', label: 'Profil', icon: 'person-outline' },
];

export function BottomNavigation() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs>
      <TabSlot />
      <TabList
        asChild
        style={{ borderTopColor: '#E2E8F0', borderTopWidth: 1, backgroundColor: '#FFFFFF' }}>
        <View style={{ paddingBottom: insets.bottom }} className="flex-row bg-white">
          {TAB_ITEMS.map((item) => (
            <BottomNavigationItem key={item.name} {...item} />
          ))}
        </View>
      </TabList>
    </Tabs>
  );
}
