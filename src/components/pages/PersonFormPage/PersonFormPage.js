import React from 'react';
import './PersonFormPage.scss';

const PersonFormPage = () => {
  return (
    <div className="forms-wrap box">
      <div className="forms-wrap__header">
        <h2 className="forms-wrap__title">Типовая форма</h2>
        <nav className="forms-wrap__navigations">
          <ul className="forms-wrap__list">
            <li className="forms-wrap__item">
              <a className="forms-wrap__links" href="/">
                Личные данные
              </a>
            </li>
            <li className="forms-wrap__item">
              <a className="forms-wrap__links" href="/">
                Данные кредитной карты
              </a>
            </li>
            <li className="forms-wrap__item">
              <a className="forms-wrap__links" href="/">
                Результат
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="form-wrap__footer">сюда кнопку</div>
    </div>
  );
};

export default PersonFormPage;
