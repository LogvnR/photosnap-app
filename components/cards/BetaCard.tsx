import { FC } from 'react';
import Image from 'next/image';

import classes from '../../styles/cards/BetaCard.module.css';
import { BetaCardContent } from '../../helpers/content';

import ArrowBtn from '../buttons/ArrowBtn';

const BetaCard: FC = () => {
  const { title, photo } = BetaCardContent;
  return (
    <section className={classes.container}>
      <div className={classes['image-container']}>
        <Image
          layout="responsive"
          objectFit="contain"
          src={photo}
          alt={title}
        />
      </div>
      <div className={classes['content-container']}>
        <div className={classes.accent}></div>
        <h2 className={classes.title}>{title}</h2>
        <ArrowBtn title="get an invite" color="white" />
      </div>
    </section>
  );
};

export default BetaCard;
