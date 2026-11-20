import { Pressable, Text, View } from 'react-native';

import type { ConcertTab } from '@/types/concert';

const TABS: { id: ConcertTab; label: string }[] = [
  { id: 'about', label: 'Tentang' },
  { id: 'location', label: 'Lokasi' },
  { id: 'category', label: 'Kategori' },
  { id: 'faq', label: 'FAQ' },
];

interface ConcertDetailTabsProps {
  activeTab: ConcertTab;
  onChange: (tab: ConcertTab) => void;
}

export function ConcertDetailTabs({ activeTab, onChange }: ConcertDetailTabsProps) {
  return (
    <View className="mt-7 flex-row border-b border-line bg-white">
      {TABS.map((tab) => {
        const isActive = tab.id === activeTab;

        return (
          <Pressable
            key={tab.id}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
            onPress={() => onChange(tab.id)}
            className="relative h-[62px] flex-1 items-center justify-center active:opacity-70">
            <Text
              className={`text-[15px] ${
                isActive ? 'font-semibold text-navy' : 'font-medium text-muted'
              }`}>
              {tab.label}
            </Text>
            {isActive && (
              <View className="absolute bottom-0 left-[12%] right-[12%] h-[3px] rounded-full bg-coral" />
            )}
          </Pressable>
        );
      })}
    </View>
  );
}
