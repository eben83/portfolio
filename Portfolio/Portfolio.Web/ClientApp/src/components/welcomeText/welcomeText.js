import React, {} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './welcomeText.xs.css'
import './welcomeText.sm.css'
import './welcomeText.md.css'
import './welcomeText.lg.css'
import './welcomeText.xl.css'
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {faGit, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const WelcomeText = () => {
  return (
    <>
      <div className='welcomeText'>
        <div className='text'>
          <h5>Hello! I'm</h5>
          <h1>Eben Burger</h1>
          <p className='text-white-50'>Frontend Developer | Vue | React</p>
        </div>
        <div className='cvButton'>
          <div className='button'>
            Get Reseme
            <span className='icon'>
              <FontAwesomeIcon icon={faDownload} />
            </span>
          </div>
        </div>
        <div className='social'>
          <a href='https://linkedin.com/in/eben-burger-856453145'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://github.com/eben83' >
            <FontAwesomeIcon icon={faGit} />
          </a>
        </div>
      </div>
    </>
  );
}

export default WelcomeText;