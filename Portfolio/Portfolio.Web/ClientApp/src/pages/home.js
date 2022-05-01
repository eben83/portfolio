import React, {} from 'react';
import styled from 'styled-components'
import Me from '../images/me2.png'
import HeroImage from "../components/heroImage";
import WelcomeText from "../components/welcomeText";


const Home = () => {

    return (
        <>
            <Wrapper>
              <WelcomeText className='order-0'/>
              <HeroImage className='order-1' image={Me} alt='Image of me' />
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div `
  display: flex;
  flex-direction: column-reverse;
  //overflow: hidden;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    height: 20rem;
  }
`

export default Home;