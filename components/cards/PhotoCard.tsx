import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import classes from '../../styles/cards/PhotoCard.module.css';

// Add Desktop photo variant and check logic
interface Props {
  photo: StaticImageData;
  title: string;
  author: string;
  date?: string;
}

const PhotoCard: FC<Props> = ({ photo, title, author, date }) => {
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
      <Image src={photo} layout="responsive" objectFit="contain" alt={title} />
    </div>
  );
};

export default PhotoCard;
