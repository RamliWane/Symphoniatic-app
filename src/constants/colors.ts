/**
 * Concertora design tokens.
 * Used through NativeWind class aliases (tailwind.config.js `theme.extend.colors`),
 * and directly when a raw color value is required (e.g. icon `color` props).
 */
export const colors = {
  white: '#FFFFFF',
  navy: '#183B56',
  coral: '#E76F51',
  coralSoft: '#FDEDE8',
  muted: '#718096',
  border: '#E2E8F0',
  backgroundSoft: '#F7F9FC',
} as const;

export type ColorToken = keyof typeof colors;
