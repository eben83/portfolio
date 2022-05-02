import React, {} from 'react';
import Skill from "../../components/skill";

import './skills.xs.css'
import './skills.sm.css'
import './skills.md.css'
import './skills.lg.css'
import './skills.xl.css'

const Skills = () => {
  return (
    <>
      <div className='skills'>
        <h4>Skills</h4>
        <Skill title={"test"} text={'text'} />
      </div>
    </>
  );
}
export default Skills;