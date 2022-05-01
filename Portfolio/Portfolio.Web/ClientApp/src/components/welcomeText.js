import React, {} from 'react';
import styled from "styled-components";

const WelcomeText = (props) => {
  return (
    <>
      <Heading>
        <TextBlock>
          <Hello>Hello! I'm</Hello>
          <Name>Eben Burger</Name>
          <p className='text-white-50'>Self Taught Frontend Developer</p>
        </TextBlock>
      </Heading>
    </>
  );
}

const Heading = styled.div`
  padding: 1rem;
  @media (min-width: 768px) {
    padding: 2rem;
  }
`
const TextBlock = styled.div`
  @media (min-width: 768px) {
  }
`
const Hello = styled.h2`
`
const Name = styled.h1`
`

export default WelcomeText;