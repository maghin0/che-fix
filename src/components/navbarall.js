import React from 'react';
import { Link } from 'gatsby';

import Menu from '../components/menu';

import './../assets/sass/style.scss';
import chelogo from '../assets/images/che-icon.png';

const NavbarAll = () => (
  <div className="hero-head ">
    <Menu />
    <nav className="navbar is-transparent ">
      <div className="container">
        <div className="navbar-brand">
          <Link
            to="/"
            className="navbar-item logo "
            style={{ backgroundColor: 'hsl(0, 0%, 29%)' }}
          >
            <img src={chelogo} alt="Che's Logo" />
          </Link>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className=" montserratregular navbar-end">
            <span className="navbar-item ">
              <p>
                <Link
                  to="/"
                  className="navItem"
                  activeStyle={{ color: '#F9F4F4' }}
                >
                  Home
                </Link>
              </p>
            </span>

            <span className="navbar-item">
              <p>
                <Link
                  to="model"
                  className="navItem"
                  activeStyle={{ color: '#1d6eb3' }}
                >
                  Modeling
                </Link>
              </p>
            </span>
            <span className="navbar-item ">
              <p>
                <Link
                  to="personal"
                  className="navItem"
                  activeStyle={{ color: '#1d6eb3' }}
                >
                  Personal
                </Link>
              </p>
            </span>
            <span className="navbar-item">
              <p>
                <Link
                  to="travel"
                  className="navItem"
                  activeStyle={{ color: '#1d6eb3' }}
                >
                  Travel
                </Link>
              </p>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default NavbarAll;
