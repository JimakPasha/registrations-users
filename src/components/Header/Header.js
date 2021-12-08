import React, { useState } from 'react';
import { signOut } from 'firebase/auth';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase.config';
import { logOutUser } from '../../redux/actions';
import ButtonBurgerMenu from '../ButtonBurgerMenu/ButtonBurgerMenu';
import Button from '../Button/Button';
import './Header.scss';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const clickMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const logOut = () => {
    signOut(auth).then(() => {
      dispatch(logOutUser());
      history.push('/');
    });
  };

  const generateActiveClass = () => {
    let className = '';
    if (location.pathname.includes('registration')) {
      className = 'header__navigation-item--active';
    }
    return className;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <ButtonBurgerMenu clickMenu={clickMenu} openMenu={openMenu} />
          <div className="header__logo">
            <NavLink className="header__logo-link" exact to="/">
              Городской сайт
            </NavLink>
          </div>
          <nav className="header__navigation">
            <ul
              className={
                openMenu
                  ? 'header__navigation-list active'
                  : 'header__navigation-list'
              }
            >
              <NavLink
                className="header__navigation-link"
                activeClassName="header__navigation-item--active"
                exact
                to="/1"
              >
                <li className="header__navigation-item">Пункт 1</li>
              </NavLink>

              <NavLink
                className="header__navigation-link"
                activeClassName="header__navigation-item--active"
                exact
                to="/2"
              >
                <li className="header__navigation-item">Пункт 2</li>
              </NavLink>
              <NavLink
                className="header__navigation-link"
                activeClassName="header__navigation-item--active"
                exact
                to="/3"
              >
                <li className="header__navigation-item">Пункт 3</li>
              </NavLink>
              <NavLink
                className={`header__navigation-link ${generateActiveClass()}`}
                activeClassName="header__navigation-item--active"
                exact
                to="/registration"
              >
                <li className="header__navigation-item">Пункт 4</li>
              </NavLink>
              <NavLink
                className="header__navigation-link"
                activeClassName="header__navigation-item--active"
                exact
                to="/5"
              >
                <li className="header__navigation-item">Пункт 5</li>
              </NavLink>
            </ul>
          </nav>
          <div className="header__logout-btn">
            <Button name="выход" onClick={logOut} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
