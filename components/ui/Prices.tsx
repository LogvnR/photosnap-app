import { useState, FC } from 'react';

import { PricingCardContent } from '../../helpers/content';

import classes from '../../styles/ui/Prices.module.css';
import ToggleCard from '../buttons/ToggleCard';
import PricingCard from '../cards/PricingCard';

const Prices: FC = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <section className={classes.container}>
      <ToggleCard action={toggleHandler} option={toggle} />
      <section className={classes['pricing-container']}>
        {PricingCardContent.map((content) => (
          <PricingCard {...content} type={toggle} key={content.title} />
        ))}
      </section>
    </section>
  );
};

export default Prices;
