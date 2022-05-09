export interface HomeContent {
  title: string;
  info: string;
  image: string;
}

export const HomeFeatureContent: HomeContent[] = [
  {
    title: '100% responsive',
    info: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
    image: '/assets/features/desktop/responsive.svg',
  },
  {
    title: 'no photo upload limit',
    info: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    image: '/assets/features/desktop/no-limit.svg',
  },
  {
    title: 'available to embed',
    info: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
    image: '/assets/features/desktop/embed.svg',
  },
];
