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
      paragraphone={
        ' Merry Christmas!! 🎄🎁💖 How did you spend your Xmas eve?! I did not get to see beautiful Christmas lights this year but I got to see this magnificent city light in the heart of Taichung. This marks as my first rooftop in Taiwan ✌✌ Gotta say this is by far my favorite spot in Taiwan it is by far the craziest thing I have ever done. I literally had to walk through those bars to get to that rooftop lol. I live for the adrenaline 😝💕 Can not wait to explore more!!'
      }
      paragraphtwo={' '}
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
      paragraphone={
        ' Do you ever feel like you are in the right place at the right time This was my first music fest and I would have never asked it to be anywhere else but here! '
      }
      paragraphtwo={
        '  There is no place I would rather be than rave on the mountain top! The gorge amphitheatre '
      }
    />
    <Vshoot
      imgName="chetaipei"
      number="03"
      shoot={'taipei'}
      title={'Creative Shoot'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' Simple Simon Says'}
      location={' “Taipei”'}
      paragraphone={
        ' "Nothing can dim the light that shines from within" - Maya Angelou'
      }
      paragraphtwo={
        ' Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. '
      }
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
export default Travel;
