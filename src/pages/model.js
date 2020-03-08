import React from 'react';

import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Helmet from '../components/helmet';
import Footer from '../components/footer';
import NavbarAll from '../components/navbarall';

const Model = () => (
  <div className="pagebg">
    <Helmet />
    <NavbarAll />
    <Vshoot
      imgName="chejungle"
      number="01"
      shoot="jungle"
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' Simple Simon Says'}
    />
    <Hshoot
      imgName="chemotor"
      number="02"
      shoot="motor"
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' Simple Simon Says'}
    />
    <Vshoot
      imgName="chepark"
      number="03"
      shoot="park"
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
    <Vshoot
      imgName="chechina"
      number="05"
      shoot="china"
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' Simple Simon Says'}
    />
    <Vshoot
      imgName="chelights"
      number="06"
      shoot="lights"
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' Simple Simon Says'}
    />
    <Vshoot
      imgName="cheorange"
      number="07"
      shoot="orange"
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' Simple Simon Says'}
    />

    <Footer />
  </div>
);
export default Model;
