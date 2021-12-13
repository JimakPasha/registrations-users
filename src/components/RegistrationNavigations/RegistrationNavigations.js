import React from 'react';
import { NavLink } from 'react-router-dom';
import './RegistrationNavigations.scss';

const RegistrationNavigations = () => {
  return (
    <div className="registration-nav">
      <div className="forms-wrap box">
        <div className="forms-wrap__header">
          <h2 className="forms-wrap__title">Типовая форма</h2>
          <nav className="forms-wrap__navigations">
            <ul className="forms-wrap__list">
              <li className="forms-wrap__item">
                <NavLink
                  className="forms-wrap__link"
                  activeClassName="forms-wrap__link--active"
                  exact
                  to="/registration/personal/"
                >
                  Личные данные
                </NavLink>
              </li>
              <li className="forms-wrap__item">
                <NavLink
                  className="forms-wrap__link"
                  activeClassName="forms-wrap__link--active"
                  exact
                  to="/registration/card/"
                >
                  Данные кредитной карты
                </NavLink>
              </li>
              <li className="forms-wrap__item">
                <NavLink
                  className="forms-wrap__link"
                  activeClassName="forms-wrap__link--active"
                  exact
                  to="/registration/result/"
                >
                  Результат
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default RegistrationNavigations;
