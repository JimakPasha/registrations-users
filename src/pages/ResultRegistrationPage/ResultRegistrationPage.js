import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import './ResultRegistrationPage.scss';

const ResultRegistrationPage = () => {
  const dataUser = useSelector(
    (state) => state.dataRegestration.dataRegestration
  );
  return (
    <div className="result-reg-page box">
      <h4 className="result-reg-page__title">Личные данные</h4>
      <div className="result-reg-page__table table">
        <ul className="table__row">
          <li className="table__item name">Имя</li>
          <li className="table__item surName">Фамилия</li>
          <li className="table__item patronymic">Отчество</li>
          <li className="table__item date">Дата рождения</li>
          <li className="table__item sex">Пол</li>
          <li className="table__item country">Страна</li>
          <li className="table__item info">Инфо</li>
        </ul>
        <ul className="table__row">
          <li className="table__item table__item-user name">s</li>
          <li className="table__item table__item-user surName">s</li>
          <li className="table__item table__item-user patronymic">s</li>
          <li className="table__item table__item-user date">s</li>
          <li className="table__item table__item-user sex">s</li>
          <li className="table__item table__item-user country">s</li>
          <li className="table__item table__item-user info">
            <span className="info__text">Доп. инфо</span>
          </li>
        </ul>
        {dataUser.map(
          ({ firstName, surName, patronymic, date, sex, country }) => {
            return (
              <ul className="table__row">
                <li className="table__item table__item-user name">
                  {firstName}
                </li>
                <li className="table__item table__item-user surName">
                  {surName}
                </li>
                <li className="table__item table__item-user patronymic">
                  {patronymic}
                </li>
                <li className="table__item table__item-user date">{date}</li>
                <li className="table__item table__item-user sex">{sex}</li>
                <li className="table__item table__item-user country">
                  {country}
                </li>
                <li className="table__item table__item-user info">
                  <span className="info__text">Доп. инфо</span>
                </li>
              </ul>
            );
          }
        )}
        <div className="table__data-card">Данные кредитной карты</div>
      </div>
      <div className="line"> </div>
      <div className="button-box result-reg-page__btn">
        <Button name="Сохранить" />
      </div>
    </div>
  );
};

export default ResultRegistrationPage;
