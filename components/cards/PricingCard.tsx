import { FC } from 'react';

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

export default PricingCard;
