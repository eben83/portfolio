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
        <div className='skillItem'>
          <Skill title={"HTML"} text={'text'} />
          <Skill title={"CSS"} text={'text'} />
          <Skill title={"ScSS"} text={'text'} />
          <Skill title={"React Js"} text={'text'} />
          <Skill title={"Vue"} text={'text'} />
          <Skill title={"Flexbox"} text={'text'} />
          <Skill title={"FireBase"} text={'text'} />
          <Skill title={"VueX"} text={'text'} />
          <Skill title={"Web Development"} text={'text'} />
          <Skill title={"Frontend Develop"} text={'text'} />
          <Skill title={"Bootstrap"} text={'text'} />
          <Skill title={"BootstrapVue"} text={'text'} />
          <Skill title={"Reactstrap"} text={'text'} />
        </div>
      </div>
    </>
  );
}
export default Skills;