import React from 'react';
import './ButtonBurgerMenu.scss';

const ButtonBurgerMenu = ({ clickMenu, openMenu }) => {
  return (
    <button
      className={openMenu ? 'burger-menu' : 'burger-menu close'}
      type="button"
      onClick={clickMenu}
    >
      <span
        className={openMenu ? 'burger-menu__line close' : 'burger-menu__line'}
      />
    </button>
  );
};

export default ButtonBurgerMenu;
