import React from 'react';
import './Button.scss';

const Button = ({ name }) => {
  return (
    <button className="button" type="submit">
      {name}
    </button>
  );
};

export default Button;
