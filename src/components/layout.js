import React from 'react';

import './../assets/sass/style.scss';
import Helmet from './helmet';
import Header from './header';
import Menu from './menu';

const Layout = ({ children }) => (
  <div>
    <Menu />
    <Helmet />
    <Header />
  </div>
);

export default Layout;
