import React from 'react';

import './../assets/sass/style.scss';

const Hshoot = props => (
  <div>
    <section
      className=" hero 
    is-medium pagebg"
    >
      <div className="container hero-body ">
        <div className="columns is-mobile is-centered">
          <div className=" vl-h "></div>
          <div className="column ">
            <figure className="  image  ">
              <div className=" che-img">
                <h1 className=" has-text-left archivo_blackregular shoot-title">
                  Blanchard Tribal <p className="subtitle"> Photoshoot</p>
                </h1>
                <h1 className=" archivo_blackregular snumber-h ">
                  {props.number}
                </h1>

                <img
                  className="shadow-img"
                  src={props.img}
                  alt=" Che indian-traditional look"
                />
                <br />
                <h1 className="columns is-mobile">
                  <p className="column is-one-third">
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

      <div className="">
        <div
          className="image "
          style={{ margin: 150, marginBottom: 0, marginTop: 0 }}
        >
          <img src={props.shoot} alt="Che indian-traditional look" />
        </div>
      </div>
      <section className="hero banner-bg ">
        <div className="hero-body padding-abt">
          <div className="container">
            <div className="columns is-mobile ">
              <div className=" primetimeregular column is-offset-2 is-3">
                <h1
                  className="  has-text-white  has-text-right is-pulled right title-abt"
                  style={{ lineHeight: 1.2 }}
                >
                  ABOUT THE SHOOT
                </h1>
              </div>

              <div className=" column is-offset-1 is-5 montserratmedium  ">
                <h1 className="subtitle  has-text-white  has-text-justified 	">
                  Taiwanese/American model. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud. <br />
                  Exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  </div>
);

export default Hshoot;
