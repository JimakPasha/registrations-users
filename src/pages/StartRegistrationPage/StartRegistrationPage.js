import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { csv } from 'd3';
import { checkRegistrationMethod } from '../../redux/actions';
import Radio from '../../components/Radio/Radio';
import Button from '../../components/Button/Button';
import './StartRegistrationPage.scss';

const StartRegistrationPage = () => {
  const [dataUser, setDataUser] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    csv('dataUsers.csv').then((data) => {
      setDataUser(data);
    });
  }, []);

  return (
    <div className="start-reg-page">
      <div className="start-reg-page__box box">
        <h6 className="start-reg-page__title">Выберите способ регистрации:</h6>
        <Formik
          initialValues={{
            registrationMethod: 'personal',
            loadList: '',
          }}
          onSubmit={(data) => {
            dispatch(checkRegistrationMethod(data.registrationMethod));
          }}
        >
          {(values, errors, isSubmitting) => (
            <Form>
              <div className="start-reg-page__radio-btns">
                <Radio
                  name="registrationMethod"
                  type="radio"
                  value="personal"
                  title="Персональная"
                />
                <Radio
                  name="registrationMethod"
                  type="radio"
                  value="list"
                  title="Регистрация пользователей списком"
                />
              </div>
              {values.values.registrationMethod === 'list' && (
                <label
                  className="start-reg-page__load-label"
                  htmlFor="csv-uploads"
                >
                  <div className="start-reg-page__load-title">
                    Загрузить список
                  </div>
                  <input
                    className="start-reg-page__load-input"
                    name="csv-uploads"
                    id="csv-uploads"
                    type="file"
                    accept=".csv"
                  />
                </label>
              )}
              <div className="button-box">
                {values.values.registrationMethod === 'personal' ? (
                  <NavLink exact to="/registration/personal">
                    <Button name="Далее" />
                  </NavLink>
                ) : (
                  <NavLink exact to="/registration/result">
                    <Button name="Далее" />
                  </NavLink>
                )}
              </div>
            </Form>
          )}
        </Formik>
        {/* <form className="start-reg-page__form">
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
            <label htmlFor="csv-uploads">
              Загрузить список
              <input
                className="start-reg-page__load-file"
                name="csv-uploads"
                id="csv-uploads"
                type="file"
                accept=".csv"
              />
            </label>
            <p className="start-reg-page__load-text">People-list.csv</p>
          </div>
          <NavLink exact to="/registration/personal">
            <Button name="Далее" />
          </NavLink>
        </form> */}
      </div>
    </div>
  );
};

export default StartRegistrationPage;
