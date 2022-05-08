import { useState, FC } from 'react';
import { Pivot as Hamburger } from 'hamburger-react';

import classes from '../../styles/navigation/Header.module.css';

const Header: FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <nav className={classes.container}>
      <div className={classes.title}>
        <img src="/assets/shared/desktop/logo.svg" alt="Photosnap" />
      </div>
      <div className={classes['mobile-container']}>
        <Hamburger toggled={menuToggle} toggle={setMenuToggle} />
      </div>
    </nav>
  );
};

export default Header;
