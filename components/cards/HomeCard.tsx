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
  const [altLayout, setAltLayout] = useState<boolean>(false);
  const { screenWidth } = useStore();

  useEffect(() => {
    if (screenWidth >= 1280) {
      setAltLayout(true);
      setPicture(photoL);
    } else if (screenWidth >= 768 && screenWidth < 1280) {
      setAltLayout(true);
      setPicture(photoM);
    } else {
      setAltLayout(false);
    }
  }, [screenWidth]);

  return (
    <>
      {!altLayout && (
        <Mobile
          photo={photoS}
          name={name}
          accent={accent}
          button={button}
          color={color}
          title={title}
          info={info}
        />
      )}
      {altLayout && (
        <Desktop
          photoPosition={photoPosition}
          photo={picture}
          name={name}
          accent={accent}
          button={button}
          color={color}
          title={title}
          info={info}
        />
      )}
    </>
  );
};

interface SubProps {
  photo: StaticImageData;
  accent: boolean;
  color: string;
  title: string;
  info?: string;
  photoPosition?: string;
  name: string;
  button: boolean;
}

const Mobile: FC<SubProps> = ({
  photo,
  name,
  accent,
  button,
  color,
  title,
  info,
}) => {
  return (
    <section className={classes.container}>
      <div className={classes['image-container']}>
        <Image layout="responsive" objectFit="contain" src={photo} alt={name} />
      </div>
      <div className={classes[`content-container__${color}`]}>
        <div className={classes['text-container']}>
          {accent && <div className={classes.accent}></div>}
          <h2 className={classes.title}>{title}</h2>
          {info && <p className={classes.info}>{info}</p>}
          {button && <ArrowBtn title="get an invite" color={color} />}
        </div>
      </div>
    </section>
  );
};

const Desktop: FC<SubProps> = ({
  photo,
  name,
  accent,
  button,
  color,
  title,
  info,
  photoPosition,
}) => {
  const { screenWidth } = useStore();
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
        <Image layout="responsive" objectFit="contain" src={photo} alt={name} />
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
