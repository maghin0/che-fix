import React from 'react';

import Layout from '../components/layout';
import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Footer from '../components/footer';

const IndexPage = () => (
  <div>
    <Layout />
    <Vshoot imgName="chechina" number="01" shoot="china" />
    <Hshoot imgName="chemotor" number="02" shoot="motor" />
    <Footer />
  </div>
);
export default IndexPage;
