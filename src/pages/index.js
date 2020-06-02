import React from 'react';

import Layout from '../components/layout';
import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Footer from '../components/footer';

import '../assets/sass/menu.scss';

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
      paragraphone={
        ' Happy Lantern Festival 🎆🎆🎆 I did not have a chance to see the lanterns or put the sky lanterns today, but yesterday I rushed to Tainan Salt Water Bee Festival to be really cool! This experience is unforgettable!!! I will make another wave next year 😝💪'
      }
      paragraphtwo={
        ' Did you know, Chinese people usually get a 5 to 6 day holiday for Lunar New Year, and for those who works will receive a year-end bonus as well as a red envelope once they return back to work!!?? 🤑💵💵💵. Everyone here is so freaking lucky!! I now see why people love CYN so much lol 🤣🧧♥️.'
      }
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
      paragraphone={
        ' Do not get stuck doing certain things you do not enjoy doing. If you do not change your direction, you will never know where you would end up being. Life is limitless and full of possibilities. It is vital to believe in yourself that anything and everything you want can happen. In fact, everything already exist in the universe'
      }
      paragraphtwo={
        ' You can not make her do the things she dgaf, because she is the creator of her own destiny. '
      }
    />
    <Footer />
  </div>
);
export default IndexPage;
