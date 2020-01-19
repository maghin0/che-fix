import React from 'react';

import cheJungle from '../images/chejungle.jpg';
import './style.scss';

const Hshoot = () => (
  <div>
    <section
      className=" hero 
    is-medium pagebg"
    >
      <div className="container hero-body ">
        <div className="columns is-centered">
          <div className="column is-two-thirds">
            <figure class="  image  is-1080by1350">
              <div className="cheIMG">
                <h1 className=" snumber ">01</h1>
                <img
                  className=" chePNG"
                  src={cheJungle}
                  alt="Che indian-traditional look"
                />
                <h1 className="textv">
                  <p className="has-text-grey-light has-text-left">
                    {' '}
                    Photographer{' '}
                  </p>
                  Simple Simon Says
                </h1>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Hshoot;
