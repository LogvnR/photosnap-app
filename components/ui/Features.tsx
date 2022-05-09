import { FC } from 'react';

import classes from '../../styles/ui/Features.module.css';
import FeatureCard from '../cards/FeatureCard';

import { HomeContent } from '../../helpers/cards/FeatureCardContent';

interface Props {
  content: HomeContent[];
}

const Features: FC<Props> = ({ content }) => {
  return (
    <div className={classes.container}>
      {content.map(({ title, info, image }) => (
        <FeatureCard image={image} title={title} info={info} key={title} />
      ))}
    </div>
  );
};

export default Features;
