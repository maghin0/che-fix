import React from 'react';
import { IconContext } from 'react-icons';

import { FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosPhonePortrait, IoIosMail } from 'react-icons/io';
import { StaticQuery, graphql } from 'gatsby';
import './../assets/sass/style.scss';

import Get from '../assets/images/get-in-touch.png';
import submit from '../assets/images/submit.png';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            twitter
            instagram
          }
        }
      }
    `}
    render={data => (
      <footer className=" footer center has-background-light">
        <div className="column ">
          <div className="column  center get-in-touch">
            <img src={Get} alt="get in touch" />
          </div>
          <br />
          <br />
          <div className="columns is-mobile  ">
            <div className="column center is-two-fifths footercenter ">
              <p className="bd-notification is-info">
                <p className=" primetimeregular is-size-3 is-size-6-mobile">
                  CONTACT
                </p>
                <br />
                <p className="is-size-4">
                  <a href={data.site.siteMetadata.instagram}>
                    <IconContext.Provider value={{ color: '#373636' }}>
                      <figure className="media">
                        <span className="icon is-medium ">
                          <FaInstagram />
                        </span>
                        <p
                          className="montserratmedium is-size-4  has-text-grey-dark is-size-6-mobile"
                          style={{ marginLeft: 10 }}
                        >
                          Im.cheyen
                        </p>
                      </figure>
                    </IconContext.Provider>
                  </a>
                </p>
                <p className="is-size-4 has-text-grey-dark">
                  <a href={data.site.siteMetadata.taiwan}>
                    <IconContext.Provider value={{ color: '#373636' }}>
                      <figure className="media">
                        <span className="icon is-medium">
                          <FaMapMarkerAlt />
                        </span>
                        <p
                          className="montserratmedium is-size-4 has-text-grey-dark is-size-6-mobile"
                          style={{ marginLeft: 10 }}
                        >
                          Taipei, Taiwan
                        </p>
                      </figure>
                    </IconContext.Provider>
                  </a>
                </p>
                <p className="is-size-4">
                  <a href={data.site.siteMetadata.taiwan}>
                    <IconContext.Provider value={{ color: '#373636' }}>
                      <figure className="media">
                        <span className="icon is-medium">
                          <IoIosPhonePortrait />
                        </span>
                        <p
                          className="montserratmedium is-size-4 has-text-grey-dark is-size-6-mobile"
                          style={{ marginLeft: 10 }}
                        >
                          231-6574
                        </p>
                      </figure>
                    </IconContext.Provider>
                  </a>
                </p>
                <p className="is-size-4">
                  <a href={data.site.siteMetadata.taiwan}>
                    <IconContext.Provider value={{ color: '#373636' }}>
                      <figure className="media">
                        <span className="icon is-medium">
                          <IoIosMail />
                        </span>
                        <p
                          className="montserratmedium is-size-4 has-text-grey-dark is-size-6-mobile"
                          style={{ marginLeft: 10 }}
                        >
                          Che@mail.com
                        </p>
                      </figure>
                    </IconContext.Provider>
                  </a>
                </p>
              </p>
            </div>
            <div className="column is-5 ">
              <p className="bd-notification is-info">
                <p className="is-size-6 ">
                  <div className="field column is-6">
                    <input
                      className="input has-margin"
                      type="email"
                      placeholder="Email"
                    />
                    <img
                      src={submit}
                      alt="submit"
                      className=" is-pulled-right"
                    />
                  </div>
                </p>
              </p>
            </div>
          </div>
        </div>
      </footer>
    )}
  />
);

export default Footer;
