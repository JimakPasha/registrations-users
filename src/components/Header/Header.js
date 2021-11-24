import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const location = useLocation();

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
          <div className="header__logo">
            <a className="header__logo-link" href="/">
              Городской сайт
            </a>
          </div>
          <nav className="header__navigation">
            <ul className="header__navigation-list">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
