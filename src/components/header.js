import React from 'react';
// import { StaticQuery, useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

import './../assets/sass/style.scss';
import chemoon from '../assets/images/cheMoon.png';
// import chemoonwebp from '../assets/images/cheMoon.webp';
import chemoonsmall from '../assets/images/cheMoonsmall.png';
import aboutme from '../assets/images/aboutme.png';
import blue from '../assets/images/blue.png';

import Navbar from './navbar';

const Header = () => {
  // const data = useStaticQuery(graphql`
  //   fragment Che on File {
  //     childImageSharp {
  //       fluid(maxWidth: 2000) {
  //         ...GatsbyImageSharpFluid_withWebp
  //       }
  //     }
  //   }

  //   query {
  //     chemoon: file(relativePath: { eq: "cheMoon.png" }) {
  //       ...Che
  //     }
  //   }
  // `);

  return (
    <>
      <section
        className=" hero  is-fullheight hero-mobile has-background banner-bg   "
        // use keyframes on hero to make padding and margin bottom 0
      >
        <div className="hero-head ">
          <Navbar />
        </div>
        <picture
          className=" puff-in-center che-hero hero-background "
          alt="che holding the moon"
        >
          <source
            type="image/png"
            srcset={chemoonsmall}
            media="screen and (max-width: 600px)"
          />
          {/* <source type="image/webp" srcset={chemoonwebp} /> */}

          <img
            //fluid={data.chemoon.childImageSharp.fluid}
            src={chemoon}
            className=" puff-in-center che-hero hero-background "
            alt="che holding the moon"
          />
        </picture>
        {/* <img
          //fluid={data.chemoon.childImageSharp.fluid}
          src={chemoonsmall}
          className="che-hero-small puff-in-center  hero-background "
          alt="che holding the moon"
        /> */}

        <img
          className="hero-background hero-blue "
          src={blue}
          alt="che holding the moon"
        />

        <div className="  hero-body banner-mobile columns is-mobile ">
          <div className="  primetimeregular banner-text  column is-1 is-offset-8 is-mobile is-uppercase has-text-weight-bold primetime has-text-white tracking-in-contract-bck-top">
            <div className="tracking-in-contract-bck-top">I</div>
            <div className="tracking-in-contract-bck-top-1">Am </div>
            <div className="tracking-in-contract-bck-top-2">Che</div>
            <div className="tracking-in-contract-bck-top-3">Yen</div>
          </div>
        </div>
      </section>
      <section className="hero is-info">
        <div className="hero-body  about-me-mobile">
          <div className="container">
            <div className="columns is-mobile ">
              <div className="column is-6">
                <img
                  src={aboutme}
                  alt="About me section"
                  className="is-pulled-right"
                />
              </div>
              <div className=" montserratmedium column is-4 has-text-justified">
                <h1 className="is-size-6 is-size-7-mobile">
                  Taiwanese/American model. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud.
                </h1>
                <br />
                <h2 className="is-size-6 is-size-7-mobile">
                  Exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </h2>
              </div>
            </div>
            <div className="column is-2"></div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
