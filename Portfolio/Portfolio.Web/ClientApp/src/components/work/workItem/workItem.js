import React, {} from 'react';

import './workItem.xs.css'
import './workItem.sm.css'
import './workItem.md.css'
import './workItem.lg.css'
import './workItem.xl.css'
const WokItem = ({start, end, company, context}) => {
  return (
    <>
      <div className='workItem'>
        <div className='dateContainer text-center'>
          <div className='date'>
            <p>{start} <br/> - <br/> {end}</p>
          </div>
        </div>
        <div className='context'>
          <div className='workHeading'>
            <h4>{company}</h4>
          </div>
          <div className='workText'>
            <p>{context}</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default WokItem;