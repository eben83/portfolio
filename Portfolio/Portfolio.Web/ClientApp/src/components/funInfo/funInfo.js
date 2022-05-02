import React, {} from 'react';

import './funInfo.xs.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const FunInfo = ({title, number, icon}) => {
  return (
    <>
      <div className='funInfo'>
        <div className='funItem'>
          <div className='icon'>
            <FontAwesomeIcon icon={icon} />
          </div>
          <div className='funItemText'>
            <h6>{title}</h6>
            <p>{number}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default FunInfo;