import { FC, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import useStore from '../../helpers/store';

import classes from '../../styles/cards/HomeCard.module.css';
import ArrowBtn from '../buttons/ArrowBtn';

interface Props {
  photoS: StaticImageData;
  photoM: StaticImageData;
  photoL: StaticImageData;
  accent: boolean;
  color: string;
  title: string;
  info?: string;
  photoPosition: string;
  name: string;
  button: boolean;
}

const HomeCard: FC<Props> = ({
  photoS,
  photoM,
  photoL,
  accent,
  color,
  title,
  info,
  name,
  button,
  photoPosition,
}) => {
  const [picture, setPicture] = useState<StaticImageData>(photoM);
  const { screenWidth } = useStore();

  useEffect(() => {
    console.log(screenWidth);
    if (screenWidth >= 1280) {
      setPicture(photoL);
    } else if (screenWidth >= 768 && screenWidth < 1280) {
      setPicture(photoM);
    } else {
      setPicture(photoS);
    }
  }, [screenWidth]);

  return (
    <section
      style={
        screenWidth >= 768 && photoPosition === 'right'
          ? { flexDirection: 'row-reverse' }
          : { flexDirection: 'row' }
      }
      className={classes.container}
    >
      <div className={classes['image-container']}>
        <Image
          layout="responsive"
          objectFit="contain"
          src={picture}
          alt={name}
        />
      </div>
      <div className={classes[`content-container__${color}`]}>
        {accent && <div className={classes.accent}></div>}
        <div className={classes['text-container']}>
          <h2 className={classes.title}>{title}</h2>
          {info && <p className={classes.info}>{info}</p>}
          {button && <ArrowBtn title="get an invite" color={color} />}
        </div>
      </div>
    </section>
  );
};

export default HomeCard;
