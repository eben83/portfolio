import React, {  } from 'react';
import NavMenu from './NavMenu';
import Home from "../pages/home";
import About from "../pages/about";
import Skills from "../pages/skills";

const Layout = ({media}) => {
  
    return (
        <div>
          <NavMenu media={media}/>
          <Home media={media} />
          <About media={media} />
          <Skills />
        </div>
    );
}

export default Layout
