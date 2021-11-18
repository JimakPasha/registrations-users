import React, { useState } from 'react';
import Button from '../../Button/Button';
import './StartPage.scss';

const StartPage = () => {
  const [radioInput, setRadioInput] = useState('registrationPerson');

  return (
    <div className="start-page">
      <div className="start-page__box box">
        <h6 className="start-page__title">Выберите способ регистрации:</h6>
        <form className="start-page__form">
          <label className="start-page__label" htmlFor="registrationPerson">
            <input
              className="start-page__input"
              id="registrationPerson"
              type="radio"
              checked={radioInput === 'registrationPerson'}
              value="registrationPerson"
              onChange={(e) => {
                setRadioInput(e.target.value);
              }}
            />
            <span className="start-page__label-name">Персональная</span>
          </label>
          <label className="start-page__label" htmlFor="registrationList">
            <input
              className="start-page__input"
              id="registrationList"
              type="radio"
              checked={radioInput === 'registrationList'}
              value="registrationList"
              onChange={(e) => {
                setRadioInput(e.target.value);
              }}
            />
            <span className="start-page__label-name">
              Регистрация пользователей списком
            </span>
          </label>
          <div className="start-page__load-box">
            <a className="start-page__load-link" href="/">
              Загрузить список
            </a>
            <p className="start-page__load-text">People-list.csv</p>
          </div>
          <Button name="Далее" />
        </form>
      </div>
    </div>
  );
};

export default StartPage;
