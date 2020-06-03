import React from 'react';

import Vshoot from '../components/vshoot';
import Hshoot from '../components/hshoot';
import Helmet from '../components/helmet';
import Footer from '../components/footer';
import NavbarAll from '../components/navbarall';

const Model = () => (
  <div className="pagebg">
    <Helmet />
    <NavbarAll pgtitle="PHOTOSHOOTS" />
    <Vshoot
      imgName="chejungle"
      number="01"
      shoot="jungle"
      title={'Nature'}
      subtitle={'Photoshoot'}
      client={' Che Yen '}
      photographer={'@simplesimonsayss'}
      location={' Jay Blanchard Park'}
      paragraphone={
        ' Happy Halloween! It is your Gaia here coming out from the dark trying to save her beloved planet 🌎🌿💕✨'
      }
      paragraphtwo={
        ' If I disappear from the city one day, do not you worry about me. I have just lost myself in the woods.. let nature guide you..Let nature heal you..Let nature transform you..In nature is where I find myself.. '
      }
    />
    <Hshoot
      imgName="chemotor"
      number="02"
      shoot="motor"
      title={'Bike'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' @storyofyoumedia'}
      location={' Orlando, Florida'}
      paragraphone={
        ' Do not get stuck doing certain things you do not enjoy doing. If you do not change your direction, you will never know where you would end up being. Life is limitless and full of possibilities. It is vital to believe in yourself that anything and everything you want can happen. In fact, everything already exist in the universe'
      }
      paragraphtwo={
        ' You can not make her do the things she dgaf, because she is the creator of her own destiny. '
      }
    />
    <Vshoot
      imgName="chepark"
      number="03"
      shoot="park"
      title={'Park Unicorn'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' @themonkvisuals '}
      location={' Tampa, Florida'}
      paragraphone={
        ' The struggles you go through in life can only strengthen you and make you grow. Look at your reflection and ask yourself: Are you happy where you are now? The answer is usually simple and clear. Do not wait for things to happen and do not ignore the little whispers. I am ready to let go and start a new chapter.. Thank you for the pics, Minh!'
      }
      paragraphtwo={' '}
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
        ' Do not get stuck doing certain things you do not enjoy doing. If you do not change your direction, you will never know where you would end up being. Life is limitless and full of possibilities. It is vital to believe in yourself that anything and everything you want can happen. In fact, everything already exist in the universe'
      }
      paragraphtwo={
        ' You can not make her do the things she dgaf, because she is the creator of her own destiny. '
      }
    />
    <Vshoot
      imgName="chechina"
      number="05"
      shoot="china"
      title={'Lantern Festival'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' @jia_chain'}
      location={' Taichung, Taiwan'}
      paragraphone={
        ' Happy Lantern Festival 🎆🎆🎆 I did not have a chance to see the lanterns or put the sky lanterns today, but yesterday I rushed to Tainan Salt Water Bee Festival to be really cool! This experience is unforgettable!!! I will make another wave next year 😝💪'
      }
      paragraphtwo={
        ' Did you know, Chinese people usually get a 5 to 6 day holiday for Lunar New Year, and for those who works will receive a year-end bonus as well as a red envelope once they return back to work!!?? 🤑💵💵💵. Everyone here is so freaking lucky!! I now see why people love CYN so much lol 🤣🧧♥️.'
      }
    />
    <Vshoot
      imgName="chelights"
      number="06"
      shoot="lights"
      title={'Christmas'}
      subtitle={'Photoshoot'}
      client={' Simple Simon Says'}
      photographer={' @thefatmonkvisuals'}
      location={' Orlando, Florida'}
      paragraphone={
        ' Love & Lights 💕✨🙏 Merry Christmas everyone 🎄🎅🏻🎁🎉 Swipe to see the other side of my face that you have never seen before in my pics lol'
      }
      paragraphtwo={
        ' Love and appreciate yourself with every fiber of your being, because youre the only person who will be with you your entire life. Forgive and let go of everything in your past that doesnt serve you. Be courageous enough to unleash and uncover your true potential. Thrive to be passionate. Find your purpose and transform your life. Speak only kindness. Empower and inspire others to do the same. '
      }
    />
    <Vshoot
      imgName="cheorange"
      number="07"
      shoot="orange"
      title={'Lunar'}
      subtitle={'Photoshoot'}
      client={' Che Yen'}
      photographer={'@marcblairphoto'}
      location={' Orlando, Florida'}
      paragraphone={
        ' Chinese New Year is a big deal in my country (its the biggest & most special festival for asians), but Ive completely forgotten how its like to celebrate this special day. Its been awhile since I celebrated Chinese New Year because I have no families here and no friends lol 😓'
      }
      paragraphtwo={
        '     So Im super grateful for this girl & her mom for inviting me over for a warm new years dinner at their familys restaurant, Songkran! (Yall need to check out their restaurant when youre in Daytona!!) her mom makes bomb ass Thai food!!! 🤤🥘@Midori also has her art pieces hanging all over the walls!! Show some love if youre ever in that area! '
      }
    />

    <Footer />
  </div>
);
export default Model;
