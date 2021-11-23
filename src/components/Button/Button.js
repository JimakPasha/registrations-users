import React from 'react';
import './Button.scss';

const Button = ({ name, disabled }) => {
  return (
    <button className="button" type="submit" disabled={disabled}>
      {name}
    </button>
  );
};

export default Button;
