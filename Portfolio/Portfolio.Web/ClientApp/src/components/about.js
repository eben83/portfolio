import React, {} from 'react';
import styled from "styled-components";

const About = () => {
  return (
    <>
      <Wrapper>
        <Heading>About me</Heading>
        <Text>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </Text>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 5rem 0;
  background-color: white;
  height: 20rem;
  color: #252734;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Heading = styled.h1`
  margin: 5rem 0;
`

const Text = styled.div`
  padding: 0 20rem;
  //width: 20rem;
  
  
`

export default About;