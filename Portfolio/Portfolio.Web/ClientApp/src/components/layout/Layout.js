import React, {  } from 'react';

import NavMenu from "../navMenu/navMenu";

import './layout.xs.css'
import './layout.sm.css'
import './layout.md.css'
import './layout.lg.css'
import './layout.xl.css'

const Layout = ({ children }) => {
  
    return (
        <div className='layout'>
          <div className='navContainer'>
            <NavMenu />
          </div>
          <div className='context'>
            {children}
          </div>
        </div>
    );
}

export default Layout
