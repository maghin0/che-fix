import React from 'react';

import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Helmet from '../components/helmet';
import Footer from '../components/footer';
import NavbarAll from '../components/navbarall';

const Travel = () => (
  <div className="pagebg">
    <Helmet />
    <NavbarAll />
    <Vshoot imgName="chetaiwan" number="01" shoot={'taiwan'} />
    <Hshoot imgName={'chethailand'} number="02" shoot={'thailand'} />
    <Vshoot imgName="chetaipei" number="03" shoot={'taipei'} />
    <Hshoot imgName={'chemotor'} number="04" shoot={'motor'} />
    <Footer />
  </div>
);
export default Travel;
