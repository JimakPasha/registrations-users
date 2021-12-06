import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Papa from 'papaparse';
import { nanoid } from 'nanoid';
import {
  checkRegistrationMethod,
  registrationsUsersList,
  deleteUsersList,
} from '../../redux/actions';
import Radio from '../../components/Radio/Radio';
import Button from '../../components/Button/Button';
import './StartRegistrationPage.scss';

const StartRegistrationPage = () => {
  const [loadFile, setLoadFile] = useState();
  const dispatch = useDispatch();
  const history = useHistory();

  const upLoad = (e) => {
    dispatch(deleteUsersList());
    const input = e.target.files[0];
    // eslint-disable-next-line prefer-const
    let readerObj = new FileReader();
    readerObj.onload = function parse() {
      const result = Papa.parse(readerObj.result, { header: true });
      const arrData = result.data;
      // eslint-disable-next-line no-param-reassign
      arrData.map((item) => (item.id = nanoid()));
      dispatch(registrationsUsersList(arrData));
    };
    readerObj.readAsText(input);
  };

  return (
    <div className="start-reg-page">
      <div className="start-reg-page__box box">
        <h6 className="start-reg-page__title">Выберите способ регистрации:</h6>
        <Formik
          initialValues={{
            registrationMethod: 'personal',
          }}
          onSubmit={(data) => {
            dispatch(checkRegistrationMethod(data.registrationMethod));
            if (data.registrationMethod === 'personal') {
              dispatch(deleteUsersList());
              history.push('/registration/personal');
            } else {
              history.push('/registration/result');
            }
          }}
        >
          {(values) => (
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
                    onChange={(e) => setLoadFile(upLoad(e))}
                    value={loadFile}
                  />
                </label>
              )}
              <div className="button-box">
                <Button name="Далее" />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default StartRegistrationPage;
