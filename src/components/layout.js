import React from 'react';

import './../assets/sass/style.scss';
import Helmet from './helmet';
import Header from './header';

const Layout = ({ children }) => (
  <div>
    <Helmet />
    <Header />
  </div>
);

export default Layout;
