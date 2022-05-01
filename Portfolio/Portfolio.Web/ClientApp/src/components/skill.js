import React, {} from 'react';
import styled from 'styled-components'

const Skill = ({title, text}) => {
  return (
    <>
      <Wrapper>
        <h4>{title}</h4>
        <p>{text}</p>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div``
export default Skill;