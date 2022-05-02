import React, {} from 'react';

import './funInfo.xs.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from "@fortawesome/free-solid-svg-icons";

const FunInfo = (props) => {
  return (
    <>
      <div className='funInfo'>
        <div className='funItem'>
          <FontAwesomeIcon icon={faCoffee} />
          <div className='funItemText'>
            <h6>Cups of Coffe</h6>
            <p>2000</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default FunInfo;