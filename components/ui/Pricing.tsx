import { useState, FC } from 'react';
import Switch from 'react-switch';

import classes from '../../styles/ui/Pricing.module.css';

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

interface ToggleCardProps {
  option: boolean;
  action: () => void;
}

const ToggleCard: FC<ToggleCardProps> = ({ option, action }) => {
  return (
    <section className={classes['toggle-container']}>
      <h4
        className={
          !option ? classes.option : `${classes.option} ${classes.disabled}`
        }
      >
        Monthly
      </h4>
      <Switch
        onChange={action}
        checked={option}
        offColor="#DFDFDF"
        offHandleColor="#000000"
        onColor="#000000"
        onHandleColor="#ffffff"
        uncheckedIcon={false}
        checkedIcon={false}
        width={60}
        height={32}
        handleDiameter={24}
      />
      <h4
        className={
          option ? classes.option : `${classes.option} ${classes.disabled}`
        }
      >
        Yearly
      </h4>
    </section>
  );
};

export default Pricing;
