import { StaticImageData } from 'next/image';
import createAndShareMobile from '../../public/assets/home/mobile/create-and-share.jpg';
import createAndShareTablet from '../../public/assets/home/tablet/create-and-share.jpg';
import createAndShareDesktop from '../../public/assets/home/desktop/create-and-share.jpg';

import beautifulStoriesMobile from '../../public/assets/home/mobile/beautiful-stories.jpg';
import beautifulStoriesTablet from '../../public/assets/home/tablet/beautiful-stories.jpg';
import beautifulStoriesDesktop from '../../public/assets/home/desktop/beautiful-stories.jpg';

import designedForEveryoneMobile from '../../public/assets/home/mobile/designed-for-everyone.jpg';
import designedForEveryoneTablet from '../../public/assets/home/tablet/designed-for-everyone.jpg';
import designedForEveryoneDesktop from '../../public/assets/home/desktop/designed-for-everyone.jpg';

interface HomeContent {
  name: string;
  photoS: StaticImageData;
  photoM: StaticImageData;
  photoL: StaticImageData;
  accent: boolean;
  title: string;
  color: string;
  info: string;
  photoPosition: string;
}

export const HomeCardContent: HomeContent[] = [
  {
    name: 'Create and Share',
    photoS: createAndShareMobile,
    photoM: createAndShareTablet,
    photoL: createAndShareDesktop,
    accent: true,
    title: 'create and share your photo stories.',
    color: 'white',
    info: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    photoPosition: 'right',
  },
  {
    name: 'Beautiful Stories',
    photoS: beautifulStoriesMobile,
    photoM: beautifulStoriesTablet,
    photoL: beautifulStoriesDesktop,
    accent: false,
    title: 'beautiful stories every time',
    color: 'black',
    info: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
    photoPosition: 'left',
  },
  {
    name: 'Designed For Everyone',
    photoS: designedForEveryoneMobile,
    photoM: designedForEveryoneTablet,
    photoL: designedForEveryoneDesktop,
    accent: false,
    title: 'designed for everyone',
    color: 'black',
    info: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.',
    photoPosition: 'right',
  },
];
