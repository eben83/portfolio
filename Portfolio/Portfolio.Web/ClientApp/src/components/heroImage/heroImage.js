import React, {} from 'react';

import './heroImage.xs.css'
import './heroImage.sm.css'
import './heroImage.md.css'
import './heroImage.lg.css'
import './heroImage.xl.css'

const HeroImage = ({image, alt}) => {
  return (
    <>
      <div className='heroImage'>
        <img src={image} alt={alt} />
      </div>
    </>
  );
}

export default HeroImage;
