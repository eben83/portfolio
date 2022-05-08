import React, {  } from 'react';

import NavMenu from "../navMenu/navMenu";

import './layout.xs.css'
import './layout.sm.css'
import './layout.md.css'
import './layout.lg.css'
import './layout.xl.css'
import {Container} from "reactstrap";

const Layout = ({ children }) => {
  
    return (
        <div className='layout'>
          <div className='navContainer'>
            <NavMenu />
          </div>
          <Container>
            <div className='context'>
              {children}
            </div>
          </Container>
        </div>
    );
}

export default Layout
