import React, {} from 'react';
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const HeroImage = ({image, alt}) => {
  return (
    <>
      <Wrapper>
        {/*<ShapeWrapper>*/}
          {/*<RoundShape >*/}
          {/*  <FontAwesomeIcon className='git' icon={faGithub} />*/}
          {/*  <FontAwesomeIcon className='linked' icon={faLinkedin} />*/}
          {/*</RoundShape>*/}
        {/*</ShapeWrapper>*/}
        <ImageContainer>
        <img src={image} alt={alt} />
      </ImageContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: block;
`
const ImageContainer = styled.div`
  position: relative;
  
  img {
    position: relative;
    display: block;
    left: 0;

    @media (min-width: 576px) {
      left: 10rem;
    }
    @media (min-width: 768px) {
      left: 7rem;
    }
  }
`
const ShapeWrapper = styled.div`
  width: 15rem;
  height: 33rem;
  //background: red;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 1rem;

  @media (min-width: 576px) {
    right: 6rem;
  }
`
const RoundShape = styled.div`
  position: relative;
  width: 20rem;
  height: 23rem;
  border-radius: 50%;
  border: 1px solid white;
  top: 12rem;
  left: -8rem;
  
  .git {
    color: white;
    position: relative;
    left: 16rem;
    width: 3rem;
    height: 3rem;
    top: 0;
  }
  .linked {
    color: white;
    position: relative;
    left: 16rem;
    width: 3rem;
    height: 3rem;
    top: 16rem;
  }
`

export default HeroImage;

/*
* @media (min-width: 576px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 992px) {
    }
    @media (min-width: 1200px) {
    }
    @media (min-width: 1300px) {
    }
* */