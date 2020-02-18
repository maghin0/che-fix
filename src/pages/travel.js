import React from 'react';

import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Helmet from '../components/helmet';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

import chemotor from '../assets/images/chemotor.jpg';
import chemotor01 from '../assets/images/motor/motor1.jpg';
import chemotor02 from '../assets/images/motor/motor2.jpg';
import chemotor03 from '../assets/images/motor/motor3.jpg';

const Travel = () => (
  <div>
    <Helmet />
    <Navbar />
    <Vshoot imgName="chejungle" number="01" shoot={'jungle'} />
    <Hshoot img={chemotor03} number="02" shoot={chemotor01} />
    <Vshoot imgName="chepark" number="03" shoot={'china'} />
    <Hshoot img={chemotor} number="04" shoot={chemotor02} />
    <Footer />
  </div>
);
export default Travel;
