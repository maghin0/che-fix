import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Shoots from './carousel-imgs/shoots';
import './../assets/sass/style.scss';

const Vshoot = props => {
  const number = props.number;
  const title = props.title;
  const subtitle = props.subtitle;
  const client = props.client;
  const photographer = props.photographer;
  const location = props.location;

  var type = props.shoot;
  const ShootToRender = Shoots[type];
  const imgName = props.imgName;
  const data = useStaticQuery(graphql`
    fragment Vertical on File {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    query {
      chejungle: file(relativePath: { eq: "chejungle.jpg" }) {
        ...Vertical
      }

      chechina: file(relativePath: { eq: "chechina.jpg" }) {
        ...Vertical
      }

      chepark: file(relativePath: { eq: "chepark.jpg" }) {
        ...Vertical
      }

      chelights: file(relativePath: { eq: "chelights.jpg" }) {
        ...Vertical
      }

      cheorange: file(relativePath: { eq: "cheorange.jpg" }) {
        ...Vertical
      }
      cheplanetearth: file(relativePath: { eq: "cheplanetearth.jpg" }) {
        ...Vertical
      }
      chebesties: file(relativePath: { eq: "chebesties.jpg" }) {
        ...Vertical
      }
      chetaiwan: file(relativePath: { eq: "chetaiwan.jpg" }) {
        ...Vertical
      }
      chetaipei: file(relativePath: { eq: "chetaipei.jpg" }) {
        ...Vertical
      }
    }
  `);

  return (
    <div>
      <section
        className=" hero 
    is-medium shoot-margin "
      >
        <div className=" hero-body  " style={{ paddingBottom: 0 }}>
          <div className="columns is-centered">
            <div className="vl "></div>
            <div className="column is-5">
              <div className="che-img  ">
                <h1 className=" has-text-left archivo_blackregular shoot-title  is-size-4-mobile">
                  {title}{' '}
                  <p className="subtitle is-size-5-mobile"> {subtitle}</p>
                </h1>
                <h1 className=" archivo_blackregular snumber is-size-2-mobile">
                  {number}
                </h1>
                <Img
                  fluid={data[imgName].childImageSharp.fluid}
                  className="shadow-img "
                />
                <div className="shoot-background"></div>

                <h1 className="columns is-mobile textv has-text-left">
                  <div className="column textvspace  is-one-third">
                    <p className=" montserratregular-gray">Location</p>

                    <p className=" montserratmedium "> {location} </p>
                  </div>
                  <div className="column textvspace is-one-third">
                    <p className=" montserratregular-gray">Photographer</p>

                    <p className=" montserratmedium "> {photographer} </p>
                  </div>
                  <div className="column textvspace is-one-third">
                    <p className=" montserratregular-gray">Client</p>

                    <p className=" montserratmedium">{client} </p>
                  </div>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" columns is-mobile is-gapless shoot-margin ">
          <div className="column  is-6 banner-bg">
            <div className="columns is-centered ">
              <div className="column is-2 "></div>
              <div className=" column  padding-abt-txt-v  ">
                <div className="has-text-white">
                  <div className="primetimeregular">
                    <h1
                      className="column is-2 title-abt is-size-5-mobile padding-abt-title-v "
                      style={{ lineHeight: 1.2 }}
                    >
                      ABOUT THE SHOOT
                    </h1>
                  </div>

                  <div className=" column is-8 ">
                    <h6 className=" is-size-6 is-size-7-mobile montserratmedium has-text-justified  has-text-white ">
                      Taiwanese/American model. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud.
                      <br />
                      <br />
                      Exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor in reprehenderit in
                      voluptate velit esse cillum dolore eu fugiat nulla
                      pariatur. Excepteur sint occaecat cupidatat non proident,
                      sunt in culpa qui officia deserunt mollit anim id est
                      laborum.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="image ">
              <ShootToRender />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vshoot;
