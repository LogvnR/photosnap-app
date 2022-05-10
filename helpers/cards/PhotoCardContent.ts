import { StaticImageData } from 'next/image';

import theMountainsMobile from '../../public/assets/stories/mobile/mountains.jpg';
import theMountainsDesktop from '../../public/assets/stories/desktop/mountains.jpg';

import sunsetCityMobile from '../../public/assets/stories/mobile/cityscapes.jpg';
import sunsetCityDesktop from '../../public/assets/stories/desktop/cityscapes.jpg';

import voyageMobile from '../../public/assets/stories/mobile/18-days-voyage.jpg';
import voyageDesktop from '../../public/assets/stories/desktop/18-days-voyage.jpg';

import architecturalsMobile from '../../public/assets/stories/mobile/architecturals.jpg';
import architecturalsDesktop from '../../public/assets/stories/desktop/architecturals.jpg';

import worldTourMobile from '../../public/assets/stories/mobile/world-tour.jpg';
import worldTourDesktop from '../../public/assets/stories/desktop/world-tour.jpg';

import unforeseenCornersMobile from '../../public/assets/stories/mobile/unforeseen-corners.jpg';
import unforeseenCornersDesktop from '../../public/assets/stories/desktop/unforeseen-corners.jpg';

import kingOnAfricaMobile from '../../public/assets/stories/mobile/king-on-africa.jpg';
import kingOnAfricaDesktop from '../../public/assets/stories/desktop/king-on-africa.jpg';

import tripToNowhereMobile from '../../public/assets/stories/mobile/trip-to-nowhere.jpg';
import tripToNowhereDesktop from '../../public/assets/stories/desktop/trip-to-nowhere.jpg';

import rageOfTheSeaMobile from '../../public/assets/stories/mobile/rage-of-the-sea.jpg';
import rageOfTheSeaDesktop from '../../public/assets/stories/desktop/rage-of-the-sea.jpg';

import runningFreeMobile from '../../public/assets/stories/mobile/running-free.jpg';
import runningFreeDesktop from '../../public/assets/stories/desktop/running-free.jpg';

import behindTheWavesMobile from '../../public/assets/stories/mobile/behind-the-waves.jpg';
import behindTheWavesDesktop from '../../public/assets/stories/desktop/behind-the-waves.jpg';

import calmWatersMobile from '../../public/assets/stories/mobile/calm-waters.jpg';
import calmWatersDesktop from '../../public/assets/stories/desktop/calm-waters.jpg';

import theMilkyWayMobile from '../../public/assets/stories/mobile/milky-way.jpg';
import theMilkyWayDesktop from '../../public/assets/stories/desktop/milky-way.jpg';

import darkForestMobile from '../../public/assets/stories/mobile/dark-forest.jpg';
import darkForestDesktop from '../../public/assets/stories/desktop/dark-forest.jpg';

import somwarpetMobile from '../../public/assets/stories/mobile/somwarpet.jpg';
import somwarpetDesktop from '../../public/assets/stories/desktop/somwarpet.jpg';

import landOfDreamsMobile from '../../public/assets/stories/mobile/land-of-dreams.jpg';
import landOfDreamsDesktop from '../../public/assets/stories/desktop/land-of-dreams.jpg';

interface HomePhotoContent {
  photoS: StaticImageData;
  photoL: StaticImageData;
  title: string;
  author: string;
}

interface StoriesPhotoContent {
  photoS: StaticImageData;
  photoL: StaticImageData;
  title: string;
  author: string;
  date: string;
}

export const HomePhotoCardContent: HomePhotoContent[] = [
  {
    author: 'john appleseed',
    title: 'the mountains',
    photoS: theMountainsMobile,
    photoL: theMountainsDesktop,
  },
  {
    author: 'benjamin cruz',
    title: 'sunset cityscapes',
    photoS: sunsetCityMobile,
    photoL: sunsetCityDesktop,
  },
  {
    author: 'alexi borodin',
    title: '18 days voyage',
    photoS: voyageMobile,
    photoL: voyageDesktop,
  },
  {
    author: 'samantha brooke',
    title: 'architecturals',
    photoS: architecturalsMobile,
    photoL: architecturalsDesktop,
  },
];

export const StoriesPhotoCardContent: StoriesPhotoContent[] = [
  {
    author: 'john appleseed',
    title: 'the mountains',
    photoS: theMountainsMobile,
    photoL: theMountainsDesktop,
    date: 'april 16th 2020',
  },
  {
    author: 'benjamin cruz',
    title: 'sunset cityscapes',
    photoS: sunsetCityMobile,
    photoL: sunsetCityDesktop,
    date: 'april 14th 2020',
  },
  {
    author: 'alexi borodin',
    title: '18 days voyage',
    photoS: voyageMobile,
    photoL: voyageDesktop,
    date: 'april 11th 2020',
  },
  {
    author: 'samantha brooke',
    title: 'architecturals',
    photoS: architecturalsMobile,
    photoL: architecturalsDesktop,
    date: 'april 9th 2020',
  },
  {
    author: 'william malcolm',
    title: 'unforeseen corners',
    photoS: unforeseenCornersMobile,
    photoL: unforeseenCornersDesktop,
    date: 'april 3rd 2020',
  },
  {
    author: 'tim hillenburg',
    title: 'king on africa: part iI',
    photoS: kingOnAfricaMobile,
    photoL: kingOnAfricaDesktop,
    date: 'march 29th 2020',
  },
  {
    author: 'felicia rourke',
    title: 'the trip to nowhere',
    photoS: tripToNowhereMobile,
    photoL: tripToNowhereDesktop,
    date: 'march 21st 2020',
  },
  {
    author: 'mohammed abdul',
    title: 'rage of the sea',
    photoS: rageOfTheSeaMobile,
    photoL: rageOfTheSeaDesktop,
    date: 'march 19th 2020',
  },
  {
    author: 'michelle',
    title: 'running free',
    photoS: runningFreeMobile,
    photoL: runningFreeDesktop,
    date: 'march 16th 2020',
  },
  {
    author: 'lamarr wilson',
    title: 'behind teh waves',
    photoS: behindTheWavesMobile,
    photoL: behindTheWavesDesktop,
    date: 'march 11th 2020',
  },
  {
    author: 'samantha brooke',
    title: 'calm waters',
    photoS: calmWatersMobile,
    photoL: calmWatersDesktop,
    date: 'march 9th 2020',
  },
  {
    author: 'benjamin cruz',
    title: 'the milky way',
    photoS: theMilkyWayMobile,
    photoL: theMilkyWayDesktop,
    date: 'march 5th 2020',
  },
  {
    author: 'mohammed abdul',
    title: 'night at the dark forest',
    photoS: darkForestMobile,
    photoL: darkForestDesktop,
    date: 'March 4th 2020',
  },
  {
    author: 'michelle',
    title: "somwarpet's beauty",
    photoS: somwarpetMobile,
    photoL: somwarpetDesktop,
    date: 'march 1st 2020',
  },
  {
    author: 'william malcolm',
    title: 'land of dreams',
    photoS: landOfDreamsMobile,
    photoL: landOfDreamsDesktop,
    date: 'february 25th 2020',
  },
];
