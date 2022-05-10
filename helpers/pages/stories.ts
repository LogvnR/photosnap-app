import { StaticImageData } from 'next/image';

import moonOfAppalachiaMobile from '../../public/assets/stories/mobile/moon-of-appalacia.jpg';
import moonOfAppalachiaTablet from '../../public/assets/stories/tablet/moon-of-appalacia.jpg';
import moonOfAppalachiaDesktop from '../../public/assets/stories/desktop/moon-of-appalacia.jpg';

interface StoriesHeroContent {
  headline: string;
  title: string;
  date: string;
  author: string;
  photoS: StaticImageData;
  photoM: StaticImageData;
  photoL: StaticImageData;
  info: string;
}

export const StoriesHeroCardContent: StoriesHeroContent = {
  headline: "last month's featured story",
  title: 'hazy full moon of appalachia',
  date: 'March 2nd 2020',
  author: 'by John Appleseed',
  photoS: moonOfAppalachiaMobile,
  photoM: moonOfAppalachiaTablet,
  photoL: moonOfAppalachiaDesktop,
  info: 'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
};
