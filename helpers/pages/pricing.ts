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

interface PricingCard {
  accent: boolean;
  title: string;
  info: string;
  color: string;
  price: number;
}

export const PricingCardContent: PricingCard[] = [
  {
    accent: false,
    title: 'basic',
    info: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
    color: 'white',
    price: 19,
  },
  {
    accent: true,
    title: 'pro',
    info: 'More advanced features available. Recommended for photography veterans and professionals.',
    color: 'black',
    price: 39,
  },
  {
    accent: false,
    title: 'business',
    info: 'Additional features available such as more detailed metrics. Recommended for business owners.',
    color: 'white',
    price: 99,
  },
];
