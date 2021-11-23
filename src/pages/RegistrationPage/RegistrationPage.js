import React from 'react';
import PersonRegistrationPage from '../PersonRegistrationPage/PersonRegistrationPage';
import './RegistrationPage.scss';

const RegistrationPage = () => {
  return (
    <div className="registration-page">
      <div className="forms-wrap box">
        <div className="forms-wrap__header">
          <h2 className="forms-wrap__title">Типовая форма</h2>
          <nav className="forms-wrap__navigations">
            <ul className="forms-wrap__list">
              <li className="forms-wrap__item">
                <a
                  className="forms-wrap__link forms-wrap__link--active"
                  href="/"
                >
                  Личные данные
                </a>
              </li>
              <li className="forms-wrap__item">
                <a className="forms-wrap__link" href="/">
                  Данные кредитной карты
                </a>
              </li>
              <li className="forms-wrap__item">
                <a className="forms-wrap__link" href="/">
                  Результат
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <PersonRegistrationPage />
      </div>
    </div>
  );
};

export default RegistrationPage;
