import { FC } from 'react';

import classes from '../../styles/buttons/ArrowBtn.module.css';

interface Props {
  color: string;
}

const ArrowBtn: FC<Props> = ({ color }) => {
  return (
    <div className={classes[`container-${color}`]}>
      get an invite
      <img src={`/assets/shared/desktop/arrow-${color}.svg`} />
    </div>
  );
};

export default ArrowBtn;
