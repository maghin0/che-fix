import React from 'react';

import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Helmet from '../components/helmet';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

const Model = () => (
  <div>
    <Helmet />
    <Navbar />
    <Vshoot imgName="chejungle" number="01" shoot="jungle" />
    <Hshoot imgName="chemotor" number="02" shoot="motor" />
    <Vshoot imgName="chepark" number="03" shoot="park" />
    <Hshoot imgName="chemotor" number="04" shoot="motor" />
    <Vshoot imgName="chechina" number="05" shoot="china" />
    <Vshoot imgName="chelights" number="06" shoot="lights" />
    <Vshoot imgName="cheorange" number="07" shoot="orange" />

    <Footer />
  </div>
);
export default Model;
