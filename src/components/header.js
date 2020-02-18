import React from 'react';

import './../assets/sass/style.scss';
import chemoon from '../assets/images/cheMoon.png';
import aboutme from '../assets/images/aboutme.png';
import blue from '../assets/images/blue.png';

import Navbar from './navbar';

const Header = () => (
  <>
    <section className="hero  is-fullheight has-background banner-bg  ">
      <div className="hero-head is-primary ">
        <Navbar />
      </div>

      <img
        className=" puff-in-center che-img hero-background "
        src={chemoon}
        alt="che holding the moon"
        style={{
          top: 0,
          bottom: 0,
          width: '100%',
          height: '100%'
        }}
      />
      <img className="hero-background " src={blue} alt="che holding the moon" />

      <div className="  hero-body columns is-mobile ">
        <div className="  primetimeregular banner-text  column is-1 is-offset-8 is-mobile is-uppercase has-text-weight-bold primetime has-text-white tracking-in-contract-bck-top">
          <div className="tracking-in-contract-bck-top">I</div>
          <div className="tracking-in-contract-bck-top-1">Am </div>
          <div className="tracking-in-contract-bck-top-2">Che</div>
          <div className="tracking-in-contract-bck-top-3">Yen</div>
        </div>
      </div>
    </section>
    <section className="hero is-info ">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-mobile ">
            <div className="column is-6">
              <img
                src={aboutme}
                alt="About me section"
                className="is-pulled-right"
              />
            </div>
            <div className=" montserratmedium column is-4 has-text-justified">
              <h1 className="is-size-6 is-size-7-mobile">
                Taiwanese/American model. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud.
              </h1>
              <br />
              <h2 className="is-size-6 is-size-7-mobile">
                Exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </h2>
            </div>
          </div>
          <div className="column is-2"></div>
        </div>
      </div>
    </section>
  </>
);

export default Header;
