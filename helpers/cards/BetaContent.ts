import { StaticImageData } from 'next/image';

import beta from '../../public/assets/shared/mobile/bg-beta.jpg';

interface BetaContent {
  title: string;
  photo: StaticImageData;
}

export const BetaCardContent: BetaContent = {
  title: 'We’re in beta. Get your invite today!',
  photo: beta,
};
