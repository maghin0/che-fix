import React from 'react';
import { FaInstagram, FaMapMarkerAlt, FaMailBulk } from 'react-icons/fa';
import { IoIosPhonePortrait } from 'react-icons/io';
import { StaticQuery, graphql } from 'gatsby';
import './style.scss';

import Get from '../images/get-in-touch.png';
import submit from '../images/submit.png';

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            twitter
            instagram
            taiwan
          }
        }
      }
    `}
    render={data => (
      <footer className=" footer center has-background-light">
        <div className="column ">
          <div className="column is-flex center">
            <img src={Get} alt="get in touch" />
          </div>
          <br />
          <br />
          <div className="columns is-mobile ">
            <div className="column center is-two-fifths footercenter">
              <p className="bd-notification is-info">
                <p className="is-size-3" style={{ marginLeft: 10 }}>
                  CONTACT
                </p>
                <br />
                <p className="is-size-4">
                  <a href={data.site.siteMetadata.instagram}>
                    <figure className="media">
                      <span className="icon is-medium">
                        <FaInstagram />
                      </span>
                      <p style={{ marginLeft: 10 }}>Im.cheyen</p>
                    </figure>
                  </a>
                </p>
                <p className="is-size-4">
                  <a href={data.site.siteMetadata.taiwan}>
                    <figure className="media">
                      <span className="icon is-medium">
                        <FaMapMarkerAlt />
                      </span>
                      <p style={{ marginLeft: 10 }}>Taipei, Taiwan</p>
                    </figure>
                  </a>
                </p>
                <p className="is-size-4">
                  <a href={data.site.siteMetadata.taiwan}>
                    <figure className="media">
                      <span className="icon is-medium">
                        <IoIosPhonePortrait />
                      </span>
                      <p style={{ marginLeft: 10 }}>231-6574</p>
                    </figure>
                  </a>
                </p>
                <p className="is-size-4">
                  <a href={data.site.siteMetadata.taiwan}>
                    <figure className="media">
                      <span className="icon is-medium">
                        <FaMailBulk />
                      </span>
                      <p style={{ marginLeft: 10 }}>Che@mail.com</p>
                    </figure>
                  </a>
                </p>
              </p>
            </div>
            <div className="column is-half ">
              <p className="bd-notification is-info">
                <p className="is-size-6">
                  <div className="field column is-two-fifths">
                    <input className="input" type="email" placeholder="Email" />
                  </div>
                  <img
                    src={submit}
                    alt="submit"
                    className="column is-offset-1"
                  />
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
