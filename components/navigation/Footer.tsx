import React from 'react';

import classes from '../../styles/navigation/Footer.module.css';
import ArrowBtn from '../buttons/ArrowBtn';

const Footer = () => {
  return (
    <footer className={classes.container}>
      <div className={classes.title}>
        <img src="/assets/shared/desktop/logo-light.svg" alt="Photosnap" />
      </div>
      <div className={classes.social}>
        <img src="/assets/shared/desktop/facebook.svg" alt="Facebook" />
        <img src="/assets/shared/desktop/youtube.svg" alt="Youtube" />
        <img src="/assets/shared/desktop/twitter.svg" alt="Twitter" />
        <img src="/assets/shared/desktop/pinterest.svg" alt="Pinterest" />
        <img src="/assets/shared/desktop/instagram.svg" alt="Instagram" />
      </div>
      <div className={classes.navigation}>
        <h4>home</h4>
        <h4>stories</h4>
        <h4>features</h4>
        <h4>pricing</h4>
      </div>
      <ArrowBtn title="get an invite" color="white" />
      <p className={classes.copyright}>copyright 2019. all right reserved</p>
    </footer>
  );
};

export default Footer;
