import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import useStore from '../../helpers/store';

import classes from '../../styles/cards/HomeCard.module.css';
import ArrowBtn from '../buttons/ArrowBtn';

interface Props {
  photo: StaticImageData;
  accent: boolean;
  color: string;
  title: string;
  info?: string;
  photoPosition: string;
  name: string;
  button: boolean;
}

const HomeCard: FC<Props> = ({
  photo,
  accent,
  color,
  title,
  info,
  name,
  button,
}) => {
  const { screenWidth } = useStore();
  return (
    <section className={classes.container}>
      <div className={classes['image-container']}>
        <Image layout="responsive" objectFit="contain" src={photo} alt={name} />
      </div>
      <div className={classes[`content-container-${color}`]}>
        {accent && <div className={classes.accent}></div>}
        <h2 className={classes.title}>{title}</h2>
        {info && <p className={classes.info}>{info}</p>}
        {button && <ArrowBtn title="get an invite" color={color} />}
      </div>
    </section>
  );
};

export default HomeCard;
