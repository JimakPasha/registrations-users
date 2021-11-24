import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import './StartRegistrationPage.scss';

const StartRegistrationPage = () => {
  const [radioInput, setRadioInput] = useState('registrationPerson');

  return (
    <div className="start-reg-page">
      <div className="start-reg-page__box box">
        <h6 className="start-reg-page__title">Выберите способ регистрации:</h6>
        <form className="start-reg-page__form">
          <label className="start-reg-page__label" htmlFor="registrationPerson">
            <input
              className="start-reg-page__input"
              id="registrationPerson"
              type="radio"
              checked={radioInput === 'registrationPerson'}
              value="registrationPerson"
              onChange={(e) => {
                setRadioInput(e.target.value);
              }}
            />
            <span className="start-reg-page__label-name">Персональная</span>
          </label>
          <label className="start-reg-page__label" htmlFor="registrationList">
            <input
              className="start-reg-page__input"
              id="registrationList"
              type="radio"
              checked={radioInput === 'registrationList'}
              value="registrationList"
              onChange={(e) => {
                setRadioInput(e.target.value);
              }}
            />
            <span className="start-reg-page__label-name">
              Регистрация пользователей списком
            </span>
          </label>
          <div className="start-reg-page__load-box">
            <a className="start-reg-page__load-link" href="/">
              Загрузить список
            </a>
            <p className="start-reg-page__load-text">People-list.csv</p>
          </div>
          <Button name="Далее" to="/registration/personal" />
        </form>
      </div>
    </div>
  );
};

export default StartRegistrationPage;
