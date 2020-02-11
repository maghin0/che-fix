import React from 'react';

import Shoots from './shoots';
import './../assets/sass/style.scss';

const Vshoot = props => {
  var type = props.shoot;

  const ShootToRender = Shoots[type];
  return (
    <div>
      <section
        className=" hero 
    is-medium pagebg"
      >
        <div className="container hero-body " style={{ paddingBottom: 0 }}>
          <div className="columns is-mobile is-centered">
            <div className="vl "></div>
            <div className="column is-two-thirds">
              <figure className="  image  ">
                <div className="che-img">
                  <h1 className=" has-text-left archivo_blackregular shoot-title is-size-4-mobile">
                    Blanchard Tribal{' '}
                    <p className="subtitle is-size-5-mobile"> Photoshoot</p>
                  </h1>
                  <h1 className=" archivo_blackregular snumber is-size-1-mobile">
                    {props.number}
                  </h1>

                  <img src={props.img} alt="Che indian-traditional look" />
                  <h1 className="columns is-mobile textv is-size-7-mobile">
                    <p className="column  is-one-third">
                      <p className=" montserratregular has-text-grey-light has-text-left">
                        {' '}
                        Photographer
                      </p>

                      <p className=" montserratmedium ">Simple Simon Says </p>
                    </p>
                    <p className="column textvspace is-one-third">
                      <p className=" montserratregular has-text-grey-light has-text-left">
                        {' '}
                        Photographer
                      </p>

                      <p className=" montserratmedium "> Simple Simon Says </p>
                    </p>
                    <p className="column textvspace is-one-third">
                      <p className=" montserratregular has-text-grey-light has-text-left">
                        {' '}
                        Photographer
                      </p>

                      <p className=" montserratmedium ">Simple Simon Says </p>
                    </p>
                  </h1>
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div
          className=" columns is-mobile is-gapless  "
          style={{ marginTop: 100 }}
        >
          <div className="column  is-6 banner-bg">
            <div className="columns is-centered ">
              <div className="column is-2 "></div>
              <div className=" column  padding-abt-txt-v  ">
                <div className="has-text-white">
                  <div className="primetimeregular">
                    <h1
                      className="column is-2 title-abt is-size-6-mobile padding-abt-title-v "
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
