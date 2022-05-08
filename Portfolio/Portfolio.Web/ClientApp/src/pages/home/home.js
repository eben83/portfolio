import React, {} from 'react';

import MeSquare from '../../images/meSquare.jpg'
import HeroImage from "../../components/heroImage/heroImage";
import WelcomeText from "../../components/welcomeText/welcomeText";

import './home.xs.css'
import './home.sm.css'
import './home.md.css'
import './home.lg.css'
import './home.xl.css'

const Home = () => {

    return (
        <>
            <div className='home'>
              <HeroImage 
                image={MeSquare} 
                alt='Image of me' />
              <WelcomeText />
            </div>
        </>
    );
}

export default Home;