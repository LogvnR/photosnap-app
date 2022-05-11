import { StaticImageData } from 'next/image';

import hero from '../../public/assets/pricing/mobile/hero.jpg';

interface PricingHero {
  photo: StaticImageData;
  title: string;
  info: string;
}

export const PricingHeroCardContent: PricingHero = {
  photo: hero,
  title: 'pricing',
  info: 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.',
};
