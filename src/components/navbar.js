import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'gatsby';
import './style.scss';
import instagramLogo from '../images/instagram-icon.png';

const Navbar = () => (
  <div className="hero-head is-hidden-mobile">
    <nav className="navbar is-dark">
      <div className="container">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            href="https://github.com/amandeepmittal/gatsby-bulma-quickstart"
          >
            <img src={instagramLogo} alt="Logo-1" />
          </a>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
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
