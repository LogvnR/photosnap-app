import { FC } from 'react';

import classes from '../../styles/cards/FeatureCard.module.css';

interface Props {
  title: string;
  info: string;
  image: string;
}

const FeatureCard: FC<Props> = ({ title, info, image }) => {
  return (
    <div className={classes.container}>
      <div className={classes['content-container']}>
        <img src={image} alt={title} />
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.info}>{info}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
