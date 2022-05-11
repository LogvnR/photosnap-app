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

export const AdditionalFeatureContent: HomeContent[] = [
  {
    title: 'custom domain',
    info: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
    image: '/assets/features/desktop/custom-domain.svg',
  },
  {
    title: 'boost your exposure',
    info: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list',
    image: '/assets/features/desktop/boost-exposure.svg',
  },
  {
    title: 'drag & drop image',
    info: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
    image: '/assets/features/desktop/drag-drop.svg',
  },
];
