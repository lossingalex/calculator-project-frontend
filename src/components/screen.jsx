import React from 'react'; // Import react module
import ScreenRow from './screenRow';

// Screen Display for inout and result
const Screen = (props) => {
  return (
    <div className="screen">
      <ScreenRow value={props.question}/>
      <div>
          <p>Result: {props.answer}</p>
      </div>
    </div>
  );
}

export default Screen;