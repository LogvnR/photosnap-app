import { useState, FC } from 'react';
import { Pivot as Hamburger } from 'hamburger-react';
import Link from 'next/link';

import classes from '../../styles/navigation/Header.module.css';

const Header: FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const close = () => {
    setMenuToggle(false);
  };

  return (
    <>
      <nav className={classes.container}>
        <div className={classes.title}>
          <Link href="/">
            <img src="/assets/shared/desktop/logo.svg" alt="Photosnap" />
          </Link>
        </div>
        <div className={classes['mobile-container']}>
          <Hamburger toggled={menuToggle} toggle={setMenuToggle} />
        </div>
      </nav>
      {menuToggle && (
        <section className={classes['menu-container']}>
          <div className={classes.navigation}>
            <Link href="/stories">
              <h4 onClick={close}>stories</h4>
            </Link>
            <Link href="/features">
              <h4 onClick={close}>features</h4>
            </Link>
            <Link href="/pricing">
              <h4 onClick={close}>pricing</h4>
            </Link>
          </div>
          <div className={classes.btn}>get an invite</div>
        </section>
      )}
    </>
  );
};

export default Header;
