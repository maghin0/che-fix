import React from 'react';

import './style.scss';
import chemoon from '../images/cheMoon.png';
import aboutme from '../images/aboutme.png';

import Navbar from './navbar';

const Header = () => (
  <>
    <section className="hero  is-fullheight has-background gradientBg  ">
      <div className="hero-head is-primary ">
        <Navbar />
      </div>

      <img
        className=" puff-in-center flicker-in-1 cheIMG hero-background"
        src={chemoon}
        alt="che holding the moon"
        style={{
          left: 0,
          top: 0,
          width: '100%',
          height: '100%'
        }}
      />

      <div className="  hero-body ">
        <div className="   mainCheTxt  column is-2 is-offset-8 is-uppercase has-text-weight-bold is-family-sans-serif has-text-white tracking-in-contract-bck-top">
          <div className="tracking-in-contract-bck-top">I</div>
          <div className="tracking-in-contract-bck-top-1">Am </div>
          <div className="tracking-in-contract-bck-top-2">Che</div>
          <div className="tracking-in-contract-bck-top-3">Yen</div>
        </div>
      </div>
    </section>
    <section className="hero is-medium is-info ">
      <div class="hero-body">
        <div class="container">
          <div className="columns is-gapless">
            <div className="column">
              <img src={aboutme} alt="About me section" />
            </div>
            <div className="column ">
              <h1 class="title">
                Taiwanese/American model. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud.
              </h1>
              <h2 class="subtitle">
                Exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Header;
