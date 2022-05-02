import React, {  } from 'react';
import { Route } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import Layout from './components/Layout';
import Home from './pages/home/home';
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './custom.xs.css'
import './custom.sm.css'
import './custom.md.css'
import './custom.lg.css'
import './custom.xl.css'

const App = () => {

  const isXxxl = useMediaQuery({query:'(min-width: 1680px)'})
  const isXxl = useMediaQuery({query:'(min-width: 1440px)'})
  const isXl = useMediaQuery({query:'(min-width: 1200px)'})
  const isLg = useMediaQuery({query:'(min-width: 992px)'})
  const isMd = useMediaQuery({query:'(min-width: 768px)'})
  const isSm = useMediaQuery({query:'(min-width: 576px)'})

  const media =
      isXxxl ? "xxxl" :
          isXxl ? "xxl" :
              isXl ? "xl" :
                  isLg ? "lg" :
                      isMd ? "md" :
                          isSm ? "sm" : "xs"

    return (
      <Layout media={media}>
        <Route exact path='/' component={Home} />
      </Layout>
    );
}

export default App
