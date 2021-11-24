import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createRegistrationsData } from '../../redux/actions';
import Input from '../../components/Input/Input';
import Radio from '../../components/Radio/Radio';
import Textarea from '../../components/Textarea/Textarea';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import './CardRegistrationPage.scss';

const validationSchema = yup.object({
  firstName: yup.string().required('Заполните это поле'),
  surName: yup.string().required('Заполните это поле'),
  patronymic: yup.string().required('Заполните это поле'),
  date: yup.string().required('Заполните это поле'),
  address: yup.string().required('Заполните это поле'),
  motherlastName: yup.string().required('Заполните это поле'),
  codeword: yup.string().required('Заполните это поле'),
  friendEmail: yup.string().required('Заполните это поле'),
  phoneGirlfriend: yup.string().required('Заполните это поле'),
});

const CardRegistrationPage = () => {
  const dispatch = useDispatch();

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
          cardType: 'debit',
        }}
        validationSchema={validationSchema}
        onSubmit={(data) => {
          dispatch(createRegistrationsData(data));
        }}
      >
        {(isSubmitting) => (
          <Form>
            <Input name="firstName" type="input" title="Имя:" />
            <Input name="surName" type="input" title="Фамилия:" />
            <Input name="patronymic" type="input" title="Отчество:" />
            <Input name="date" type="input" title="Дата рождения:" />
            <div className="field-box field-box-radio">
              <h5 className="field-box__title">Пол:</h5>
              <div className="field-box__radio">
                <Radio name="sex" type="radio" value="male" title="Мужской" />
                <Radio name="sex" type="radio" value="female" title="Женский" />
              </div>
            </div>
            <Select name="country" title="Страна проживания:" />
            <Input
              name="address"
              type="input"
              title="Адрес, почтовый индекс:"
            />
            <Input
              name="motherlastName"
              type="input"
              title="Девичья фамилия матери:"
            />
            <Input
              name="codeword"
              type="input"
              title="Кодовое слово в вашем банке:"
            />
            <Textarea name="infoAboutUs" title="Как вы узнали о нашем сайте:" />
            <Input name="friendEmail" type="input" title="Email друга:" />
            <Input
              name="phoneGirlfriend"
              type="input"
              title="Номер телефона своей девушки:"
            />
            <Select name="country" title="Любимая футбольная команда:" />
            <div className="line"> </div>
            <div className="button-box">
              <NavLink exact to="/registration/result">
                <Button name="Далee" disabled={isSubmitting} />
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CardRegistrationPage;
