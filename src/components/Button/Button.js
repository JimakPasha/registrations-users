import React from 'react';
import './Button.scss';

const Button = ({ name, disabled, onClick }) => {
  return (
    <button
      className="button"
      type={onClick ? 'button' : 'submit'}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
