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
          <h4>Experience</h4>
          <div className='subtitle'>
            <p>This is just an overview of my experiance</p>
          </div>
        </div>
        
        <div className='work'>
          <WorkMain />
          <WorkItem 
            className={'right'}
            start="Feb 2022" 
            end='Present' 
            company='AtraX Logistics' 
            context="Responsible for designing and implementing of all new internal static sites, new web applications or features as per Ops department requirement's involved in all stages of design and implementation." 
            />
          <WorkItem
            className={'left'}
            start="Nov 2021"
            end='Feb 2022'
            company='CWare'
            context="Responsible for frontend UI, maintaining and fixing bugs and developing new UI features to client specifications using Vue 2 framework. Implementing new REST API calls using Axios. Testing all current and new features. Designing UI to client requirement." 
            />
          <WorkItem
            className={'right'}
            start="Dec 2019"
            end='Nov 2021'
            company='Arlow Consulting'
            context="Designed and implemented user interface components for React web applications, involved in all stages of interface component design, from conception through to final testing. Designed and deployed a wide variety of websites to customer requirements" 
          />
        </div>
      </div>
    </>
  );
}
export default Experience;