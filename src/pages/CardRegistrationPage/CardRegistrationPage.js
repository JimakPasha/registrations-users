import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registrationsUser } from '../../redux/actions';
import Input from '../../components/Input/Input';
import Radio from '../../components/Radio/Radio';
import Button from '../../components/Button/Button';
import './CardRegistrationPage.scss';

const validationSchema = yup.object({
  cardNumber: yup.string().required('Заполните это поле'),
  cardValidity: yup.string().required('Заполните это поле'),
  cardCvc: yup.string().required('Заполните это поле'),
  cardType: yup.string().required('Заполните это поле'),
});

const CardRegistrationPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="person-reg-page box">
      <p className="person-reg-page__descr">
        Все поля формы обязательны для заполнения
      </p>
      <Formik
        initialValues={{
          cardNumber: '',
          cardValidity: '',
          cardCvc: '',
          cardType: 'Дебетовая',
        }}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          dispatch(registrationsUser(data));
          history.push('/registration/result');
        }}
      >
        {(values, errors, isSubmitting) => (
          <Form>
            <Input name="cardNumber" type="input" title="Номер карты:" />
            <Input name="cardValidity" type="input" title="Месяц / год:" />
            <Input name="cardCvc" type="input" title="CVC2 или CVV2:" />
            <div className="field-box field-box-radio">
              <h5 className="field-box__title">Тип карты:</h5>
              <div className="field-box__radio">
                <Radio
                  name="cardType"
                  type="radio"
                  value="Дебетовая"
                  title="Дебетовая"
                />
                <Radio
                  name="cardType"
                  type="radio"
                  value="Кредитная"
                  title="Кредитная"
                />
              </div>
            </div>
            <div className="line"> </div>
            <div className="button-box">
              <Button name="Далee" disabled={isSubmitting} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CardRegistrationPage;
