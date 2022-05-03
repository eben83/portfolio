import React, {} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

import './workMain.xs.css'
import './workMain.sm.css'
import './workMain.md.css'
import './workMain.lg.css'
import './workMain.xl.css'

const Work = (props) => {
  return (
    <>
      <div className='workMain'>
        <div className='iconContainer'>
          <div className='icon'>
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
        </div>
        <div className='context'>
          <div className='workHeading'>
            <h4>Work</h4>
          </div>
          <div className='workText'>
            <p>If You wish to view updated Reseme, please email or download it.</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Work;