import { useState, FC } from 'react';
import { Pivot as Hamburger } from 'hamburger-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import classes from '../../styles/navigation/Header.module.css';

const Header: FC = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  const close = () => {
    setMenuToggle(false);
  };

  return (
    <>
      <nav className={classes.container}>
        <div onClick={close} className={classes.title}>
          <Link href="/">
            <img src="/assets/shared/desktop/logo.svg" alt="Photosnap" />
          </Link>
        </div>
        <div className={classes['nav-container__mobile']}>
          <Hamburger toggled={menuToggle} toggle={setMenuToggle} />
        </div>
        <div className={classes['nav-container']}>
          <div className={classes.navigation}>
            <Link href="/stories">
              <h4>stories</h4>
            </Link>
            <Link href="/features">
              <h4>features</h4>
            </Link>
            <Link href="/pricing">
              <h4>pricing</h4>
            </Link>
          </div>
          <div className={classes.btn}>get an invite</div>
        </div>
      </nav>
      <motion.div
        transition={{ layout: { duration: 0.75, type: 'spring' } }}
        layout
      >
        {menuToggle && (
          <motion.section className={classes['menu-container']}>
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
          </motion.section>
        )}
      </motion.div>
    </>
  );
};

export default Header;
