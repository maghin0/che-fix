import React from 'react';
import { Link } from 'gatsby';
import './../assets/sass/style.scss';
import instagramLogo from '../assets/images/insta-icon.png';

const Navbar = () => (
  <div className="hero-head is-hidden-mobile">
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            href="https://www.instagram.com/im.cheyen/"
          >
            <img src={instagramLogo} alt="Logo-1" />
          </a>
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
                  activeStyle={{ color: '#F9F4F4' }}
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
                  activeStyle={{ color: '#F9F4F4' }}
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
                  activeStyle={{ color: '#F9F4F4' }}
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

export default Navbar;
