import type { ImageSourcePropType } from 'react-native';

/**
 * Image sources for the home screen.
 *
 * These are `null` on purpose: the matching artwork assets are not part of the
 * project yet, so components render a clearly styled placeholder instead of a
 * broken asset path. When real artwork is added to `assets/images`, replace
 * the `null` values with `require('@/assets/images/<file>')`.
 */
export const HERO_IMAGE: ImageSourcePropType | null = null;
export const EDUCATION_BANNER_IMAGE: ImageSourcePropType | null = null;
export const CONCERT_DETAIL_HERO_IMAGE: ImageSourcePropType | null = null;
