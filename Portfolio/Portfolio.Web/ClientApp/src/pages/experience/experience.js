import React, {} from 'react';

import './experience.xs.css'
import './experience.sm.css'
import './experience.md.css'
import './experience.lg.css'
import './experience.xl.css'
import WorkMain from "../../components/work/workMain/workMain";
import WorkItem from "../../components/work/workItem/workItem";

const Experience = (props) => {
  return (
    <>
      <div className='experience'>
        <div className='title'>
          <h1>Experience</h1>
          <div className='subtitle'>
            <p>This is just an overview of my experiance</p>
          </div>
        </div>
        
        <div className='work'>
          <WorkMain />
          <WorkItem 
            company='AtraX Logistics' 
            start="Feb 2022" 
            end='Present' 
            context="This is the context" />
          <WorkItem
            company='CWare'
            start="Nov 2021"
            end='Feb 2022'
            context="This is the context" />
          <WorkItem
            company='Arlow Consulting'
            start="Dec 2019"
            end='Nov 2021'
            context="This is the context" />
        </div>
      </div>
    </>
  );
}
export default Experience;