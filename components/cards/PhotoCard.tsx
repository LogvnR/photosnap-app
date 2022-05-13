import { FC, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import useStore from '../../helpers/store';

import classes from '../../styles/cards/PhotoCard.module.css';

// Add Desktop photo variant and check logic
interface Props {
  photoS: StaticImageData;
  photoL: StaticImageData;
  title: string;
  author: string;
  date?: string;
}

const PhotoCard: FC<Props> = ({ photoS, photoL, title, author, date }) => {
  const [picture, setPicture] = useState<StaticImageData>(photoS);
  const { screenWidth } = useStore();

  useEffect(() => {
    console.log(screenWidth);
    if (screenWidth >= 768) {
      setPicture(photoL);
    } else {
      setPicture(photoS);
    }
  }, [screenWidth]);
  return (
    <div className={classes.container}>
      <div className={classes['content-container']}>
        <div className={classes['title-container']}>
          {date && <p className={classes.date}>{date}</p>}
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.author}>by {author}</p>
        </div>
        <div className={classes.btn}>
          read story{' '}
          <img src="/assets/shared/desktop/arrow-white.svg" alt="Arrow" />
        </div>
      </div>
      <Image
        src={picture}
        layout="responsive"
        objectFit="contain"
        alt={title}
      />
    </div>
  );
};

export default PhotoCard;
