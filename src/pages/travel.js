import React from 'react';

import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Helmet from '../components/helmet';
import Footer from '../components/footer';
import NavbarAll from '../components/navbarall';

const Travel = () => (
  <div className="pagebg">
    <Helmet />
    <NavbarAll pgtitle="DISTINATIONS" />
    <Vshoot
      imgName="chetaiwan"
      number="01"
      shoot={'taiwan'}
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' Simple Simon Says'}
    />
    <Hshoot
      imgName={'chethailand'}
      number="02"
      shoot={'thailand'}
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' Simple Simon Says'}
    />
    <Vshoot
      imgName="chetaipei"
      number="03"
      shoot={'taipei'}
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' Simple Simon Says'}
    />
    <Hshoot
      imgName={'chemotor'}
      number="04"
      shoot={'motor'}
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' Simple Simon Says'}
    />
    <Footer />
  </div>
);
export default Travel;
