import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Shoots from './carousel-imgs/shoots';
import './../assets/sass/style.scss';

const Hshoot = props => {
  var type = props.shoot;

  const ShootToRender = Shoots[type];
  const imgName = props.imgName;
  const data = useStaticQuery(graphql`
    fragment Horizontal on File {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    query {
      chejungle: file(relativePath: { eq: "chejungle.jpg" }) {
        ...Horizontal
      }

      chemotor: file(relativePath: { eq: "chemotor.jpg" }) {
        ...Horizontal
      }

      chepark: file(relativePath: { eq: "chepark.jpg" }) {
        ...Horizontal
      }

      chelights: file(relativePath: { eq: "chelights.jpg" }) {
        ...Horizontal
      }

      cheorange: file(relativePath: { eq: "cheorange.jpg" }) {
        ...Horizontal
      }
    }
  `);
  return (
    <div>
      <section
        className=" hero 
  is-medium pagebg"
      >
        <div className="  hero-body ">
          <div className="columns is-centered ">
            <div className=" vl-h "></div>
            <div className="column is-7 ">
              <figure className="  image  ">
                <div className=" che-img">
                  <h1 className=" has-text-left archivo_blackregular shoot-title is-size-4-mobile">
                    Blanchard Tribal{' '}
                    <p className="subtitle is-size-7-mobile">Photoshoot</p>
                  </h1>
                  <h1 className=" archivo_blackregular snumber-h is-size-2-mobile ">
                    {props.number}
                  </h1>

                  <Img
                    fluid={data[imgName].childImageSharp.fluid}
                    className="shadow-img"
                  />
                  <br />
                  <h1 className="columns is-mobile is-size-6-mobile">
                    <p className="column is-one-third ">
                      <p className=" montserratregular has-text-grey-light has-text-right">
                        {' '}
                        Photographer
                      </p>

                      <p className="montserratmedium has-text-right ">
                        Simple Simon Says{' '}
                      </p>
                    </p>
                    <p className="column is-one-third">
                      <p className=" montserratregular has-text-grey-light has-text-right">
                        {' '}
                        Photographer
                      </p>

                      <p className="montserratmedium has-text-right">
                        Simple Simon Says{' '}
                      </p>
                    </p>
                    <p className="column is-one-third">
                      <p className=" montserratregular has-text-grey-light has-text-right">
                        {' '}
                        Photographer
                      </p>

                      <p className="montserratmedium has-text-right">
                        Simple Simon Says{' '}
                      </p>
                    </p>
                  </h1>
                </div>
              </figure>
            </div>
          </div>
        </div>

        <div className="columns is-centered">
          <div className=" column is-10 is-mobile">
            <figure className="  image  ">
              <div className="image " style={{}}>
                <ShootToRender />
              </div>
            </figure>
          </div>
        </div>

        <section className="hero banner-bg ">
          <div className="hero-body padding-abt">
            <div className="container">
              <div className="columns is-mobile ">
                <div className=" primetimeregular column is-offset-2 is-3">
                  <h1
                    className="  has-text-white  has-text-right is-pulled right title-abt is-size-3-mobile"
                    style={{ lineHeight: 1.2 }}
                  >
                    ABOUT THE SHOOT
                  </h1>
                </div>

                <div className=" column is-offset-1 is-5 montserratmedium  ">
                  <h1 className="is-size-5 is-size-7-mobile has-text-white  has-text-justified 	">
                    Taiwanese/American model. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud. <br />
                    Exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Hshoot;
