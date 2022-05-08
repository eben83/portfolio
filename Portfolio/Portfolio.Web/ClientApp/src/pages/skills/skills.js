import React, {} from 'react';
import Skill from "../../components/skill/skill";

import './skills.xs.css'
import './skills.sm.css'
import './skills.md.css'
import './skills.lg.css'
import './skills.xl.css'

const Skills = () => {
  return (
    <>
      <div className='skills'>
        <div className='title'>
          <h4>Skills</h4>
        </div>
        <div className='skillsContainer'>
          <div className='skillItem'>
            <Skill title={"HTML"} />
            <Skill title={"CSS"}  />
            <Skill title={"ScSS"} />
            <Skill title={"React Js"} />
            <Skill title={"Vue"} />
            <Skill title={"Flexbox"} />
            <Skill title={"FireBase"} />
            <Skill title={"VueX"} />
            <Skill title={"Web Development"} />
            <Skill title={"Frontend Develop"} />
            <Skill title={"Bootstrap"} />
            <Skill title={"BootstrapVue"} />
            <Skill title={"Reactstrap"} />
            <Skill title={"Styled Components"} />
            <Skill title={"Git"} />
            <Skill title={"Googling"} />
            <Skill title={"state Management"} />
          </div>
        </div>
        </div>
    </>
  );
}
export default Skills;