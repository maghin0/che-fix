import React from 'react';

import Layout from '../components/layout';
import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Footer from '../components/footer';

import chejungle from '../assets/images/chejungle.jpg';

import chemotor from '../assets/images/chemotor.jpg';
import chemotor01 from '../assets/images/chemotor01.jpg';

const IndexPage = () => (
  <div>
    <Layout />
    <Vshoot img={chejungle} number="01" shoot={'jungle'} />
    <Hshoot img={chemotor} number="02" shoot={chemotor01} />
    <Footer />
  </div>
);
export default IndexPage;
