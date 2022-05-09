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

import unforseenCornersMobile from '../../public/assets/stories/mobile/unforseen-corners.jpg';
import unforseenCornersDesktop from '../../public/assets/stories/desktop/unforseen-corners.jpg';

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

import somewarpetMobile from '../../public/assets/stories/mobile/somewarpet.jpg';
import somewarpetDesktop from '../../public/assets/stories/desktop/somewarpet.jpg';

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
