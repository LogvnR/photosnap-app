import { StaticImageData } from 'next/image';

import betaMobile from '../../public/assets/shared/mobile/bg-beta.jpg';
import betaTablet from '../../public/assets/shared/tablet/bg-beta.jpg';
import betaDesktop from '../../public/assets/shared/desktop/bg-beta.jpg';

interface BetaContent {
  title: string;
  photoS: StaticImageData;
  photoM: StaticImageData;
  photoL: StaticImageData;
}

export const BetaCardContent: BetaContent = {
  title: 'We’re in beta. Get your invite today!',
  photoS: betaMobile,
  photoM: betaTablet,
  photoL: betaDesktop,
};
