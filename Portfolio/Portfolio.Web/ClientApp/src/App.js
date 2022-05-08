import React, {useEffect, useState} from 'react';

import Layout from './components/layout/Layout';
import Home from './pages/home/home';
import Skills from "./pages/skills/skills";
import Information from "./pages/Information/information";
import Experience from "./pages/experience/experience";
import Split from "./components/split/split";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleUp} from "@fortawesome/free-solid-svg-icons";

import './custom.xs.css'
import './custom.sm.css'
import './custom.md.css'
import './custom.lg.css'
import './custom.xl.css'

const App = () => {

  const [showScroll, setShowScroll] = useState(false)
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
    return (
      <>
        <Layout>
          <Home />
          <Split />
          <Skills />
          <Split />
          <Information />
          <Split />
          <Experience />
        </Layout>

        <div className='scrollTop'
             onClick={scrollTop}
             style={{display: showScroll ? 'flex' : 'none'}}>
          <FontAwesomeIcon
            icon={faAngleDoubleUp}
            className=" bg-icon"
          />
        </div>
        
      </>
    );
}

export default App
