import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import classes from '../../styles/cards/HomeCard.module.css';
import ArrowBtn from '../buttons/ArrowBtn';

interface Props {
  photo: StaticImageData;
  accent: boolean;
  color: string;
  title: string;
  info: string;
  photoPosition: string;
  name: string;
}

const HomeCard: FC<Props> = ({ photo, accent, color, title, info, name }) => {
  return (
    <section className={classes.container}>
      <div className={classes['image-container']}>
        <Image layout="responsive" objectFit="contain" src={photo} alt={name} />
      </div>
      <div className={classes[`content-container-${color}`]}>
        {accent && <div className={classes.accent}></div>}
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.info}>{info}</p>
        <ArrowBtn title="get an invite" color={color} />
      </div>
    </section>
  );
};

export default HomeCard;
