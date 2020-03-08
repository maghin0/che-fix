import React from 'react';

import Layout from '../components/layout';
import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Footer from '../components/footer';

const IndexPage = () => (
  <div className="pagebg">
    <Layout />
    <Vshoot
      imgName="chechina"
      number="01"
      shoot="china"
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
    <Footer />
  </div>
);
export default IndexPage;
