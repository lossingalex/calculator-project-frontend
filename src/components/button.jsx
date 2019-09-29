import React from 'react'; // import react module

// Button
const Button = (props) => {
  return (
    <input
      type="button"
      className={'button ' + props.type}
      onClick={props.handleClick}
      value={props.label}
    />
  );
}

export default Button;