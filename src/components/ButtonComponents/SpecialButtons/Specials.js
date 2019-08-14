import React, {useState} from "react";

import SpecialButton from './SpecialButton.js';
import {specials} from '../../../data.js'
//import any components needed

//Import your array data to from the provided data file

  // STEP 2 - add the imported data to state

      /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/

       const Specials = (props) => {
         const [buttonSpecial] = useState(specials);
        return (
          <div>
            {buttonSpecial.map(special => {
            return <SpecialButton key={special} text={special} /> })}
          </div>
        );
      };
      
      export default Specials;
