import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

import useStore from '../../helpers/store';

import classes from '../../styles/cards/BetaCard.module.css';
import { BetaCardContent } from '../../helpers/content';

import ArrowBtn from '../buttons/ArrowBtn';

const BetaCard: FC = () => {
  const { title, photoS, photoM, photoL } = BetaCardContent;
  const [picture, setPicture] = useState<StaticImageData>(photoS);
  const { screenWidth } = useStore();

  useEffect(() => {
    if (screenWidth >= 1280) {
      setPicture(photoL);
    } else if (screenWidth >= 768 && screenWidth < 1280) {
      setPicture(photoM);
    } else {
      setPicture(photoS);
    }
  }, [screenWidth]);

  return (
    <section className={classes.container}>
      <div className={classes['image-container']}>
        <Image
          layout="responsive"
          objectFit="contain"
          src={picture}
          alt={title}
        />
      </div>
      <div className={classes['content-container']}>
        <div className={classes.accent}>f</div>
        <h2 className={classes.title}>{title}</h2>
        <ArrowBtn title="get an invite" color="white" />
      </div>
    </section>
  );
};

export default BetaCard;
