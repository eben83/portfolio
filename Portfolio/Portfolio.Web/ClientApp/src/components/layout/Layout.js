import React, {  } from 'react';
// import NavMenu from '../NavMenu';
import Home from "../../pages/home/home";
import Skills from "../../pages/skills/skills";

import './layout.xs.css'
import './layout.sm.css'
import './layout.md.css'
import './layout.lg.css'
import './layout.xl.css'

const Layout = ({media, children}) => {
  
    return (
        <div className='layout'>
          <div className='layout-image'>
            {/*<NavMenu media={media}/>*/}
            <div className='overlay'>
              {children}
            </div>
          </div>
        </div>
    );
}

export default Layout
