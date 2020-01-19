import React from 'react';

import './style.scss';
import cheMoon from '../images/cheMoon.png';
import Navbar from './navbar';

const Header = () => (
  <section className="hero  is-fullheight has-background ">
    <div className="hero-head is-primary ">
      <Navbar />
    </div>
    <img
      className=" hero-background gradientBg"
      src={cheMoon}
      alt="che holding the moon"
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: -1
      }}
    />

    <div className=" hero-body ">
      <div className="mainCheTxt column is-2 is-offset-8 is-uppercase has-text-weight-bold is-family-sans-serif has-text-white">
        I Am Che Yen
      </div>
    </div>
  </section>
);

export default Header;
