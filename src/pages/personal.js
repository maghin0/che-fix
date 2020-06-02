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
      paragraphone={
        ' I don’t know when I’ll be back but I know I’m gonna miss the people, the places and this beautiful land that I can call my second home. I love all of you! You guys will always be on my mind! Please don’t don’t forget my crazy ass lol 😝✌💫 It’s been an amazing journey. Thanks for all the memories, I’ll forever cherish them! Until next time, America 💛🌼☀ '
      }
      paragraphtwo={
        ' Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
      }
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
      paragraphone={
        ' Follow me as I venture into the unknown. Atlanta, Georgia was the first stop of my long awaited road trip. I wanted to visit this beautiful city and see my best friend, Melissa one last time before I leave the US.'
      }
      paragraphtwo={
        ' Melissa and I have been besties for over a decade. We didnt even speak English when we first met, it was so bad to a point that we had to use our body language to communicate lol. Although we didnt understand each other most of the time, it had somehow created a deeper bond between us 😊💕 '
      }
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
      paragraphone={
        ' WOW  Taiwanese/American model. Lorem ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.'
      }
      paragraphtwo={
        ' Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
      }
    />
    <Footer />
  </div>
);
export default Personal;
