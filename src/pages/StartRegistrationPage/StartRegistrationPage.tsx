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

interface Event<T = EventTarget> {
  target: T;
}

const StartRegistrationPage: React.FC = () => {
  const [loadFile, setLoadFile] = useState<any>();
  const [errorEmptyList, setErrorEmptyList] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const upLoad = (e: Event<HTMLInputElement>) => {
    if (e.target.files) {
      dispatch(deleteUsersList());
      const input = e.target.files[0];
      // eslint-disable-next-line prefer-const
      let readerObj = new FileReader();
      readerObj.onload = function parse() {
        const result = Papa.parse(readerObj.result, { header: true });
        const arrData = result.data;
        // eslint-disable-next-line no-param-reassign
        arrData.map((item: { id: string }) => (item.id = nanoid()));
        dispatch(registrationsUsersList(arrData));
      };
      readerObj.readAsText(input);
    }
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
              setErrorEmptyList(false);
              dispatch(deleteUsersList());
              history.push('/registration/personal');
            } else if (data.registrationMethod === 'list' && loadFile) {
              setErrorEmptyList(false);
              history.push('/registration/result');
            } else {
              setErrorEmptyList(true);
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
                    className={
                      errorEmptyList
                        ? 'start-reg-page__load-input error'
                        : 'start-reg-page__load-input'
                    }
                    name="csv-uploads"
                    id="csv-uploads"
                    type="file"
                    accept=".csv"
                    onChange={(e: Event<HTMLInputElement>) => {
                      upLoad(e);
                      setLoadFile(e.target.files);
                      setErrorEmptyList(false);
                    }}
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
