import { FC } from 'react';

import classes from '../../styles/ui/Included.module.css';

const Included: FC = () => {
  return (
    <div className={classes.container}>
      <FeaturesMobile />
    </div>
  );
};

const FeaturesMobile: FC = () => {
  return (
    <div className={classes['mobile-container']}>
      <div></div>
    </div>
  );
};

export default Included;
