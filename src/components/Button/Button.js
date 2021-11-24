import React from 'react';
import { NavLink } from 'react-router-dom';
import './Button.scss';

const Button = ({ name, disabled, to }) => {
  return (
    <button className="button" type="submit" disabled={disabled}>
      <NavLink exact to={to}>
        {name}
      </NavLink>
    </button>
  );
};

export default Button;
