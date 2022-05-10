import { FC } from 'react';

import classes from '../../styles/buttons/ArrowBtn.module.css';

interface Props {
  color: string;
  title: string;
}

const ArrowBtn: FC<Props> = ({ color, title }) => {
  return (
    <div className={classes[`container-${color}`]}>
      {title}
      <img src={`/assets/shared/desktop/arrow-${color}.svg`} />
    </div>
  );
};

export default ArrowBtn;
