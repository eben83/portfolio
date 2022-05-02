import React, {} from 'react';
import {useInView} from "react-intersection-observer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useSpring, animated} from "react-spring";

const FunInformation = (props) => {

  const defaultOptions = {
    triggerOnce: false,
    rootMargin: '150px 0px',
    trackVisibility: true,
    delay: 200
  }

  const { ref, inView } = useInView({...defaultOptions, ...props.options})

  const spring = useSpring({
    from: { number: props.from },
    to: { number: props.to},
    config: {mass: 1, tension: 100, friction: 50, clamp: true}
  })
  
  
  return (
    <>
      <div className='info' ref={ref} style={{ opacity: inView ? 1 : 0}}>
        {inView &&
          <div className='row justify-content-center align-items-center' >
            <div className='col-5 col-md-3 text-center'>
              <div className='overview-icon'>
                <FontAwesomeIcon icon={props.icon} />
              </div>
            </div>
            <div className='col-5 col-md-8 text-center'>
              <animated.span className={"overview-number"}>
                {spring.number.interpolate(num => Math.floor(num))}
              </animated.span>
              <div className='overview-text'>
                {props.children}
              </div>
            </div>
          </div>
        }
      </div>
    </>
  );
}
export default FunInformation;