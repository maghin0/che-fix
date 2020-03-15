import React from 'react';

import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Helmet from '../components/helmet';
import Footer from '../components/footer';
import NavbarAll from '../components/navbarall';

const Personal = () => (
  <div className="pagebg">
    <Helmet />
    <NavbarAll pgtitle="CLOSE PEOPLE" />
    <Vshoot
      imgName="cheplanetearth"
      number="01"
      shoot="planetearth"
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' Simple Simon Says'}
    />
    <Vshoot
      imgName="chebesties"
      number="02"
      shoot="besties"
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' Simple Simon Says'}
    />
    <Hshoot
      imgName="chemotor"
      number="04"
      shoot="motor"
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' Simple Simon Says'}
    />
    <Footer />
  </div>
);
export default Personal;
