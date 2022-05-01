import React, {  } from 'react';
import NavMenu from './NavMenu';
import Home from "./home";

const Layout = ({media}) => {

    return (
        <div>
            <NavMenu media={media}/>
            <Home media={media} />
        </div>
    );
}

export default Layout
