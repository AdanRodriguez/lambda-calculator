import React, {useState} from "react";

import {operators} from '../../../data.js';
import OperatorButton from './OperatorButton.js';

//import any components needed

//Import your array data to from the provided data file
// STEP 2 - add the imported data to state
  /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

const Operators = (props) => {
const [buttonOperator] = useState(operators);
  return (
    <div>
      {buttonOperator.map(operator => {
        return <OperatorButton key={operator} text={operator} addOperator={props.addOperator} />})}
    </div>
  );
};

export default Operators;