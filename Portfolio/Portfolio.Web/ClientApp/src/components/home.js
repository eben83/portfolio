import React, {} from 'react';
import styled from 'styled-components'
import Me from '../images/me.jpg'

const Home = () => {
    return (
        <>
            <Wrapper>
              <LeftSide>
                <Heading>
                  <Hello>Hello! I'm</Hello>
                  <Name>Eben Burger</Name>
                  <p className='text-white-50'>Self Taught Frontend Developer</p>
                </Heading>
              </LeftSide>
              <RightSide>
                <img src={Me} alt='Image of me' />
                <RoundShape>
                  
                </RoundShape>
              </RightSide>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div `
  position: relative;
  background: #252734;
  height: 60vh;
  color: white;
  display: flex;
`

const LeftSide = styled.div`
  width: 50%;
  z-index: 20;
`
const Heading = styled.div`
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, 0);
  z-index: 10;
`
const Hello = styled.h2`
  font-size: 5rem;
`
const Name = styled.h1`
  font-size: 8rem;
`

const RightSide = styled.div`
  position: relative;
  height: 55rem;
  width: 100%;
  overflow: hidden;
  background-color: red;
  
  img {
    position: absolute;
    top: -3rem;
    right: 0;
    z-index: 0;
  }
`

const RoundShape = styled.div`
  width: 400px;
  height: 800px;
  border-top-right-radius: 400px;
  border-bottom-right-radius: 400px;
  
  &:before {
    bottom: 68px;
    left: -75px;
    width: 400px;
    height: 660px;
    border-top-right-radius: 400px;
    border-bottom-right-radius: 400px;
  }
  
  &:after {
    bottom: -46px;
    left: 24px;
    width: 450px;
    height: 900px;
    border-top-right-radius: 450px;
    border-bottom-right-radius: 450px;
  }
`


export default Home;