import React from "react";
import '../stylesheets/button.css'
function Button({ text, isClickable, manageClick }) {
  return (
    <button className = { isClickable ? 'start-button' : 'restart-button' } 
      onClick={ manageClick }>
      {text}
    </button>
  )
}

export default Button;