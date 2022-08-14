import React from "react";
import freeCodeCampLogo from '../images/fcc_primary_large.png';

function Logo() {
  return (
    <img className='freeCodeCamp-logo' 
      src={ freeCodeCampLogo } 
      alt='FreeCodeCamp Logo' />
  )
}

export default Logo;