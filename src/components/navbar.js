import React from 'react';
import { Link } from 'gatsby';
import { FaArrowCircleUp } from 'react-icons/fa';

import './../assets/sass/style.scss';

import chelogo from '../assets/images/che-icon.png';

const Navbar = () => (
  <>
    <div className="hero-head " id="nav">
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
              <Link
                to="/"
                className="navItem"
                activeStyle={{
                  color: '#f9f0f0',
                  backgroundImage: 'linear-gradient(#1e76c4, #1d6eb3 )'
                }}
              >
                <span className="navbar-item ">
                  <p>Home</p>
                </span>
              </Link>
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
    <a href="#nav" style={{ color: '#4a4a4a' }}>
      <FaArrowCircleUp size="40" className="to-top" style={{ zIndex: 10 }} />
    </a>
  </>
);

export default Navbar;
