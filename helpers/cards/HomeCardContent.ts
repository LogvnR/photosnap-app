import { StaticImageData } from 'next/image';
import photo1 from '../../public/assets/home/mobile/create-and-share.jpg';
import photo2 from '../../public/assets/home/mobile/beautiful-stories.jpg';
import photo3 from '../../public/assets/home/mobile/designed-for-everyone.jpg';

interface HomeContent {
  name: string;
  photo: StaticImageData;
  accent: boolean;
  title: string;
  color: string;
  info: string;
  photoPosition: string;
}

export const HomeCardContent: HomeContent[] = [
  {
    name: 'Create and Share',
    photo: photo1,
    accent: true,
    title: 'create and share you photo stories.',
    color: 'white',
    info: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    photoPosition: 'right',
  },
  {
    name: 'Beautiful Stories',
    photo: photo2,
    accent: false,
    title: 'beautiful stories every time',
    color: 'black',
    info: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
    photoPosition: 'left',
  },
  {
    name: 'Designed For Everyone',
    photo: photo3,
    accent: false,
    title: 'designed for everyone',
    color: 'black',
    info: 'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.',
    photoPosition: 'right',
  },
];
