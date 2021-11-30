import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { registrationsUser, editUser } from '../../redux/actions';
import Input from '../../components/Input/Input';
import Radio from '../../components/Radio/Radio';
import Textarea from '../../components/Textarea/Textarea';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import './PersonRegistrationPage.scss';

const validationSchema = yup.object({
  firstName: yup.string().required('Заполните это поле'),
  surName: yup.string().required('Заполните это поле'),
  patronymic: yup.string().required('Заполните это поле'),
  date: yup.date().required('Заполните это поле'),
  address: yup.string().required('Заполните это поле'),
  motherlastName: yup.string().required('Заполните это поле'),
  codeword: yup.string().required('Заполните это поле'),
  friendEmail: yup.string().required('Заполните это поле'),
  phoneGirlfriend: yup.string().required('Заполните это поле'),
});

const PersonRegistrationPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isEdit = useSelector((state) => state.dataRegestration.isEdit);
  const editId = useSelector((state) => state.dataRegestration.editId);
  const users = useSelector(
    (state) => state.dataRegestration.dataRegestrationUsersList
  );
  const user = users.find((item) => item.id === editId);
  const newUsers = users.filter((item) => item.id !== user.id);

  return (
    <div className="person-reg-page box">
      <p className="person-reg-page__descr">
        Все поля формы обязательны для заполнения
      </p>
      <Formik
        initialValues={
          isEdit
            ? {
                firstName: user.firstName,
                surName: user.surName,
                patronymic: user.patronymic,
                date: user.date,
                sex: user.sex,
                country: user.country,
                address: user.address,
                motherlastName: user.motherlastName,
                codeword: user.codeword,
                infoAboutUs: user.infoAboutUs,
                friendEmail: user.friendEmail,
                phoneGirlfriend: user.phoneGirlfriend,
                favorite: user.favorite,
                id: user.id,
              }
            : {
                firstName: '',
                surName: '',
                patronymic: '',
                date: '',
                sex: 'Мужской',
                country: 'Беларусь',
                address: '',
                motherlastName: '',
                codeword: '',
                infoAboutUs: '',
                friendEmail: '',
                phone: '',
                favorite: '',
                id: nanoid(),
              }
        }
        validationSchema={validationSchema}
        onSubmit={(data) => {
          if (isEdit) {
            dispatch(editUser([...newUsers, { ...user, ...data }]));
          } else {
            dispatch(registrationsUser(data));
          }
          history.push('/registration/card');
        }}
      >
        {(values, errors, isSubmitting) => (
          <Form>
            <Input name="firstName" type="input" title="Имя:" />
            <Input name="surName" type="input" title="Фамилия:" />
            <Input name="patronymic" type="input" title="Отчество:" />
            <Input
              name="date"
              type="input"
              title="Дата рождения:"
              classModifier="date"
            />
            <div className="field-box field-box-radio">
              <h5 className="field-box__title">Пол:</h5>
              <div className="field-box__radio">
                <Radio
                  name="sex"
                  type="radio"
                  value="Мужской"
                  title="Мужской"
                />
                <Radio
                  name="sex"
                  type="radio"
                  value="Женский"
                  title="Женский"
                />
              </div>
            </div>
            <Select
              name="country"
              title="Страна проживания:"
              classModifier="country"
            />
            <Input
              name="address"
              type="input"
              title="Адрес, почтовый индекс:"
              classModifier="address"
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
            <Textarea
              name="infoAboutUs"
              title="Как вы узнали о нашем сайте:"
              classModifier="info"
            />
            <Input name="friendEmail" type="input" title="Email друга:" />
            <Input
              name="phoneGirlfriend"
              type="input"
              title={
                values.values.sex === 'Мужской'
                  ? 'Номер телефона своей девушки:'
                  : 'Номер телефона своего парня:'
              }
              classModifier="phone"
            />
            <Select
              name="favorite"
              title={
                values.values.sex === 'Мужской'
                  ? 'Любимая футбольная команда:'
                  : 'Какую сковороду предпочитаешь:'
              }
              classModifier={
                values.values.sex === 'Мужской'
                  ? 'favorite-football'
                  : 'favorite-fryingPan'
              }
            />
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

export default PersonRegistrationPage;
