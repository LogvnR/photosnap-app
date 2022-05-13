import { StaticImageData } from 'next/image';

import heroMobile from '../../public/assets/features/mobile/hero.jpg';
import heroTablet from '../../public/assets/features/tablet/hero.jpg';
import heroDesktop from '../../public/assets/features/desktop/hero.jpg';

interface FeaturesHero {
  photoS: StaticImageData;
  photoM: StaticImageData;
  photoL: StaticImageData;
  title: string;
  info: string;
}

export const FeaturesHeroCardContent: FeaturesHero = {
  photoS: heroMobile,
  photoM: heroTablet,
  photoL: heroDesktop,
  title: 'features',
  info: 'We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories.',
};
