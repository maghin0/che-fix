import React from 'react';

import Layout from '../components/layout';
import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Footer from '../components/footer';

import chejungle from '../assets/images/chejungle.jpg';
import chejungle1 from '../assets/images/chejungle1.jpg';
import chejungle2 from '../assets/images/chejungle2.jpg';
import chejungle3 from '../assets/images/chejungle3.jpg';
import chemotor from '../assets/images/chemotor.jpg';
import chemotor01 from '../assets/images/chemotor01.jpg';
import chemotor02 from '../assets/images/chemotor02.jpg';
import chemotor03 from '../assets/images/chemotor03.jpg';
const IndexPage = () => (
  <div>
    <Layout />
    <Vshoot img={chejungle} number="01" shoot={chejungle2} />
    <Footer />
  </div>
);
export default IndexPage;
