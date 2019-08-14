import React, {useState} from "react";

import {numbers} from '../../../data.js';
import NumberButton from './NumberButton.js';

//import any components needed

//Import your array data to from the provided data file

  // STEP 2 - add the imported data to state
  /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/
const Numbers = (props) => {
  const [buttonNumbers] = useState(numbers);
  console.log('Numbers', props);
  return(
    <div>
      {buttonNumbers.map(number => {
      return <NumberButton key={number} text={number} addNumber={props.addNumber}/>})}
    </div>
  );
};

export default Numbers;