import React from "react";



/* Display a button element rendering the data being passed down from the parent container on props */

const SpecialButton = (props) => {
  console.log('special', props);
  return (
    <button>{props.text}</button>
    );
};

export default SpecialButton;