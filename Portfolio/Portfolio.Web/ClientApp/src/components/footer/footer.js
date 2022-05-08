import React, {} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMobile} from "@fortawesome/free-solid-svg-icons";

import './footer.xs.css'
import './footer.sm.css'
import './footer.md.css'
import './footer.lg.css'
import './footer.xl.css'

const Footer = (props) => {
  return (
    <>
      <div className='footer'>
        <p>
          <span>
            <FontAwesomeIcon className='icon' icon={faEnvelope} />
          </span>
          eben_burger@me.com
        </p>
        <p>
          <span>
            <FontAwesomeIcon className='icon' icon={faMobile} />
          </span>
          +27 (0) 73 730 0189
        </p>
      </div>
    </>
  );
}

export default Footer;