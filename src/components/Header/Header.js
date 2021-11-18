import React from 'react';
import './Header.scss';

const Header = () => {
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
              <li className="header__navigation-item">
                <a className="header__navigation-link" href="/">
                  Пункт 1
                </a>
              </li>
              <li className="header__navigation-item">
                <a className="header__navigation-link" href="/">
                  Пункт 2
                </a>
              </li>
              <li className="header__navigation-item">
                <a className="header__navigation-link" href="/">
                  Пункт 3
                </a>
              </li>
              <li className="header__navigation-item header__navigation-item--active">
                <a
                  className="header__navigation-link header__navigation-link--active"
                  href="/"
                >
                  Пункт 4
                </a>
              </li>
              <li className="header__navigation-item">
                <a className="header__navigation-link" href="/">
                  Пункт 5
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
