import React from 'react';

import './style.scss';

const Hshoot = props => (
  <div>
    <section
      className=" hero 
    is-medium pagebg"
    >
      <div className="container hero-body ">
        <div className="columns is-centered">
          <div className=" vl-h "></div>
          <div className="column ">
            <figure class="  image  ">
              <div className="cheIMG">
                <h1 className=" snumber-h ">{props.number}</h1>
                <img
                  className=" chePNG"
                  src={props.img}
                  alt="Che indian-traditional look"
                />
                <h1 className="columns">
                  <p className="column is-offset-1 is-one-third">
                    <p className=" has-text-grey-light has-text-left">
                      {' '}
                      Photographer
                    </p>

                    <p>Simple Simon Says </p>
                  </p>
                  <p className="column is-one-third">
                    <p className=" has-text-grey-light has-text-left">
                      {' '}
                      Photographer
                    </p>

                    <p>Simple Simon Says </p>
                  </p>
                  <p className="column is-one-third">
                    <p className=" has-text-grey-light has-text-left">
                      {' '}
                      Photographer
                    </p>

                    <p>Simple Simon Says </p>
                  </p>
                </h1>
              </div>
            </figure>
          </div>
        </div>
      </div>

      <div className="">
        <div className="image " style={{ margin: 150, marginBottom: 0 }}>
          <img src={props.shoot} alt="Che indian-traditional look" />
        </div>
      </div>
      <div className="column gradientBg">
        <div className="container center">
          <h1>About the shoot</h1>
        </div>
      </div>
    </section>
  </div>
);

export default Hshoot;
