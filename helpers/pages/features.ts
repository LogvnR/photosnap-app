import { StaticImageData } from 'next/image';

import hero from '../../public/assets/features/mobile/hero.jpg';

interface FeaturesHero {
  photo: StaticImageData;
  title: string;
  info: string;
}

export const FeaturesHeroCardContent: FeaturesHero = {
  photo: hero,
  title: 'features',
  info: 'We make sure all of our features are designed to be loved by every aspiring and even professional photographers who wanted to share their stories.',
};
