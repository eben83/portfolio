import React, {  } from 'react';
import {Container} from "reactstrap";

import NavMenu from "../navMenu/navMenu";
import Footer from "../footer/footer";

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
          <Container>
            <div className='context'>
              {children}
            </div>
          </Container>
          <Footer />
        </div>
    );
}

export default Layout
