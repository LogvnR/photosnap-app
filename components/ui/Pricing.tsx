import { useState, FC } from 'react';
import Switch from 'react-switch';

import classes from '../../styles/ui/Pricing.module.css';
import ToggleCard from '../buttons/ToggleCard';

const Pricing = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <section className={classes.container}>
      <ToggleCard action={toggleHandler} option={toggle} />
    </section>
  );
};

export default Pricing;
