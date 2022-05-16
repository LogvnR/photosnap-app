import { FC, useEffect, useState } from 'react';

import useStore from '../../helpers/store';

import classes from '../../styles/cards/PricingCard.module.css';

interface PricingCardProps {
  accent: boolean;
  type: boolean;
  title: string;
  info: string;
  color: string;
  price: number;
}

const PricingCard: FC<PricingCardProps> = ({
  accent,
  type,
  title,
  info,
  color,
  price,
}) => {
  const [altLayout, setAltLayout] = useState<boolean>(false);
  const { screenWidth } = useStore();

  useEffect(() => {
    console.log(screenWidth);
    if (screenWidth >= 1280) {
      setAltLayout(false);
    } else if (screenWidth >= 768 && screenWidth < 1280) {
      setAltLayout(true);
    } else {
      setAltLayout(false);
    }
  }, [screenWidth]);
  return (
    <>
      {!altLayout && (
        <Standard
          accent={accent}
          color={color}
          info={info}
          price={price}
          title={title}
          type={type}
        />
      )}
      {altLayout && (
        <Alternate
          accent={accent}
          color={color}
          info={info}
          price={price}
          title={title}
          type={type}
        />
      )}
    </>
  );
};

const Standard: FC<PricingCardProps> = ({
  accent,
  type,
  title,
  info,
  color,
  price = 0,
}) => {
  return (
    <div className={classes[`container-${color}`]}>
      {accent && <div className={classes.accent}></div>}
      <h4 className={classes.title}>{title}</h4>
      <p className={classes.info}>{info}</p>
      <div className={classes['price-container']}>
        <h2 className={classes.price}>
          ${type ? String(price * 10) : String(price)}.00
        </h2>
        <p className={classes.month}>per month</p>
      </div>
      <div className={classes[`btn-${color}`]}>pick plan</div>
    </div>
  );
};

const Alternate: FC<PricingCardProps> = ({
  accent,
  type,
  title,
  info,
  color,
  price = 0,
}) => {
  return (
    <div className={classes[`container-${color}`]}>
      {accent && <div className={classes.accent}></div>}
      <div className={classes['content-container']}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.info}>{info}</p>
        <div className={classes[`btn-${color}`]}>pick plan</div>
      </div>
      <div className={classes['price-container']}>
        <h2 className={classes.price}>
          ${type ? String(price * 10) : String(price)}.00
        </h2>
        <p className={classes.month}>per month</p>
      </div>
    </div>
  );
};

export default PricingCard;
