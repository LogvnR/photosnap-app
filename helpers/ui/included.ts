interface IncludedCard {
  title: string;
  basic: boolean;
  pro: boolean;
  business: boolean;
}

export const IncludedCardContent: IncludedCard[] = [
  {
    title: 'unlimited story posting',
    basic: true,
    pro: true,
    business: true,
  },
  {
    title: 'unlimited photo upload',
    basic: true,
    pro: true,
    business: true,
  },
  {
    title: 'embedding custom content',
    basic: false,
    pro: true,
    business: true,
  },
  {
    title: 'customize metadata',
    basic: false,
    pro: true,
    business: true,
  },
  {
    title: 'advanced metrics',
    basic: false,
    pro: false,
    business: true,
  },
  {
    title: 'photo downloads',
    basic: false,
    pro: false,
    business: true,
  },
  {
    title: 'search engine indexing',
    basic: false,
    pro: false,
    business: true,
  },
  {
    title: 'custom analytics',
    basic: false,
    pro: false,
    business: true,
  },
];
