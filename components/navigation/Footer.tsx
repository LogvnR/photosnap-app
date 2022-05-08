import React from 'react';

import classes from '../../styles/navigation/Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <img src="/assets/shared/desktop/logo-light.svg" alt="Photosnap" />
      </div>
    </div>
  );
};

export default Footer;
