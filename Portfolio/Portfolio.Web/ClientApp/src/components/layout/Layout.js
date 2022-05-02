import React, {  } from 'react';
// import NavMenu from '../NavMenu';
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Skills from "../../pages/skills/skills";

import './layout.xs.css'
import './layout.sm.css'
import './layout.md.css'
import './layout.lg.css'
import './layout.xl.css'

const Layout = ({media}) => {
  
    return (
        <div className='layout'>
          <div className='layout-image'>
            {/*<NavMenu media={media}/>*/}
            <div className='overlay'>
              <Home media={media} />
              <About media={media} />
              {/*<Skills media={media} />*/}
            </div>
          </div>
        </div>
    );
}

export default Layout
