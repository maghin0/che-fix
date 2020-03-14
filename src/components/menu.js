import React from 'react';
import { Link } from 'gatsby';

const Menu = () => (
  <div className="menu-wrap mobile-only" style={{ zIndex: 100 }}>
    <input type="checkbox" className="toggler" />
    <div className="hamburger">
      <div></div>
    </div>
    <div className="menu">
      <div>
        <div>
          <ul>
            <li>
              <Link to="/" activeStyle={{ color: '#1e76c4' }}>
                Home
              </Link>
            </li>

            <li>
              <Link to="model" activeStyle={{ color: '#1e76c4' }}>
                Modeling
              </Link>
            </li>
            <li>
              <Link to="personal" activeStyle={{ color: '#1e76c4' }}>
                Personal
              </Link>
            </li>
            <li>
              <Link to="travel" activeStyle={{ color: '#1e76c4' }}>
                Travel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
export default Menu;
