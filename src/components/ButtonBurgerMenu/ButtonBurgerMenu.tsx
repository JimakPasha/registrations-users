import React from 'react';
import './ButtonBurgerMenu.scss';

interface Props {
  clickMenu: () => void;
  openMenu: boolean;
}

const ButtonBurgerMenu: React.FC<Props> = ({ clickMenu, openMenu }: Props) => {
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
