import { useState, FC } from 'react';

import { PricingCardContent } from '../../helpers/content';

import classes from '../../styles/ui/Pricing.module.css';
import ToggleCard from '../buttons/ToggleCard';
import BetaCard from '../cards/BetaCard';
import PricingCard from '../cards/PricingCard';

const Pricing: FC = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <section className={classes.container}>
      <ToggleCard action={toggleHandler} option={toggle} />
      <section className={classes['pricing-container']}>
        {PricingCardContent.map(({ accent, title, info, color, price }) => (
          <PricingCard
            accent={accent}
            title={title}
            info={info}
            color={color}
            price={price}
            type={toggle}
          />
        ))}
      </section>
      <BetaCard />
    </section>
  );
};

export default Pricing;
