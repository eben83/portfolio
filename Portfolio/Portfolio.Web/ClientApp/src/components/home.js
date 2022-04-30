import React, {} from 'react';
import styled from 'styled-components'

const Home = () => {
    return (
        <>
            <Wrapper>
                <Title>Coming Soon!</Title>
            </Wrapper>
        </>
    );
}

const Wrapper = styled.div `
  position: relative;
  background: #000000;
  height: 100vh;
`

const Title = styled.h4 `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
`


export default Home;