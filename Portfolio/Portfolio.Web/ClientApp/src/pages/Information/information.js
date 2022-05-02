import React, {} from 'react';
import FunInfo from "../../components/funInfo/funInfo";
import {faCoffee, faDiagramProject, faHourglass} from "@fortawesome/free-solid-svg-icons";

import './information.xs.css'

const Information = (props) => {
  return (
    <>
      <div className='information'>
        <div className='title'>
          <h3>Fun Facts</h3>
        </div>
        <div className='infoItem'>
          <FunInfo
          title='Cups Of Coffee'  
          number='2000'
          icon={faCoffee}
          />
          <FunInfo
            title='Hours Spent'
            number='7500+'
            icon={faHourglass}
          />
          <FunInfo
            title='Private Repos'
            number='21'
            icon={faDiagramProject}
          />
          <FunInfo
            title='Work Repos'
            number='15'
            icon={faDiagramProject}
          />
        </div>
      </div>
    </>
  );
}
export default Information;