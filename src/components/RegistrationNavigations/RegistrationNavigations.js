import React from 'react';
import './RegistrationNavigations.scss';

const RegistrationNavigations = () => {
  return (
    <div className="registration-nav">
      <div className="forms-wrap box">
        <div className="forms-wrap__header">
          <h2 className="forms-wrap__title">Типовая форма</h2>
          <nav className="forms-wrap__navigations">
            <ul className="forms-wrap__list">
              <li className="forms-wrap__item forms-wrap__item--active">
                Личные данные
              </li>
              <li className="forms-wrap__item">Данные кредитной карты</li>
              <li className="forms-wrap__item">Результат</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default RegistrationNavigations;
