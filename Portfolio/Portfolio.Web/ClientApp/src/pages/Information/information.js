import React, {} from 'react';
import FunInformation from "../../components/funInfomation/funInformation";
import {faGit} from "@fortawesome/free-brands-svg-icons";

const Information = (props) => {
  return (
    <>
      <div className='information'>
        <FunInformation 
          icon={faGit}
          numberFrom={0}
          numberTo={10}
          text='hello'
        />
      </div>
    </>
  );
}
export default Information;