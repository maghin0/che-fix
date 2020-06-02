import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Shoots from './carousel-imgs/shoots';
import './../assets/sass/style.scss';

const Hshoot = props => {
  const number = props.number;
  const title = props.title;
  const subtitle = props.subtitle;
  const client = props.client;
  const photographer = props.photographer;
  const location = props.location;
  const paragraphone = props.paragraphone;
  const paragraphtwo = props.paragraphtwo;

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
      chethailand: file(relativePath: { eq: "chethailand.jpg" }) {
        ...Horizontal
      }
    }
  `);
  return (
    <div>
      <section
        className=" hero 
  is-medium pagebg shoot-margin"
      >
        <div className="  hero-body ">
          <div className="columns is-centered ">
            {/* <div className=" vl-h "></div> */}
            <div className="column is-7 ">
              <figure className="  image  ">
                <div className=" che-img">
                  <h1 className=" has-text-left archivo_blackregular shoot-title ">
                    {title} <p className="subtitle">{subtitle}</p>
                  </h1>
                  <h1 className=" archivo_blackregular snumber-h is-size-2-mobile ">
                    {number}
                  </h1>

                  <Img
                    fluid={data[imgName].childImageSharp.fluid}
                    className="shadow-img"
                  />
                  <br />
                  <h1 className="columns is-mobile texth has-text-right">
                    <div className="column is-one-third">
                      <p className="montserratregular-gray"> Photographer</p>

                      <p className="montserratmedium"> {photographer}</p>
                    </div>
                    <div className="column is-one-third">
                      <p className="montserratregular-gray"> Location</p>

                      <p className="montserratmedium"> {location}</p>
                    </div>
                    <div className="column is-one-third">
                      <p className="montserratregular-gray"> Client</p>

                      <p className="montserratmedium">{client} </p>
                    </div>
                  </h1>
                </div>
              </figure>
            </div>
          </div>
        </div>

        <div className="columns is-centered padding-image-h">
          <div className=" column is-10 is-mobile padding-image-h">
            <figure className="image">
              <div className="image" style={{}}>
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
                    className="  has-text-white  txt-laptop-t has-text-right is-pulled right title-abt is-size-5-mobile"
                    style={{ lineHeight: 1.2 }}
                  >
                    ABOUT THE SHOOT
                  </h1>
                </div>

                <div className=" column is-offset-1 is-5  montserratmedium  ">
                  <h1 className="is-size-5 is-size-7-mobile txt-laptop has-text-white  has-text-justified 	">
                    {paragraphone}
                    <br />

                    {paragraphtwo}
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
