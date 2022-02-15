import React from 'react';
import { Formik, Form } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import validationSchema from './ValidationSchemaPersonRegistration';
import { registrationsUser, editUser } from '../../redux/actions';
import Input from '../../components/Input/Input';
import Radio from '../../components/Radio/Radio';
import Textarea from '../../components/Textarea/Textarea';
import Select from '../../components/Select/Select';
import Button from '../../components/Button/Button';
import './PersonRegistrationPage.scss';

const PersonRegistrationPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isEdit = useSelector((state) => state.dataRegestration.isEdit);
  const editId = useSelector((state) => state.dataRegestration.editId);
  const users = useSelector(
    (state) => state.dataRegestration.dataRegestrationUsersList
  );
  const user = users.find((item) => item.id === editId);
  const newUsers = users.filter((item) => item.id !== user.id);

  const defineClassModifierPhone = (value: string): string => {
    if (value.length > 3 && value.replace(/\s+/g, '').substr(0, 4) !== '+375') {
      return 'phone-global';
    }
    return 'phone-local';
  };

  return (
    <div className="person-reg-page box">
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
                phone: user.phone,
                favorite: user.favorite,
                id: user.id,
              }
            : {
                firstName: '',
                surName: '',
                patronymic: '',
                date: '',
                sex: 'Мужской',
                country: '',
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
        {({ values, isSubmitting, setFieldValue }) => (
          <Form>
            <div className="person-reg-page__wrapper">
              <p className="person-reg-page__descr">
                Все поля формы обязательны для заполнения
              </p>
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
                value={values.country}
                setFieldValue={setFieldValue}
                classModifier="country"
                title="Страна проживания:"
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
                name="phone"
                type="input"
                title={
                  values.sex === 'Мужской'
                    ? 'Номер телефона своей девушки:'
                    : 'Номер телефона своего парня:'
                }
                classModifier={defineClassModifierPhone(values.phone)}
              />
              <Select
                name="favorite"
                value={values.favorite}
                setFieldValue={setFieldValue}
                classModifier={
                  values.sex === 'Мужской'
                    ? 'favorite-football'
                    : 'favorite-fryingPan'
                }
                title={
                  values.sex === 'Мужской'
                    ? 'Любимая футбольная команда:'
                    : 'Какую сковороду предпочитаешь:'
                }
                typeTel={values.phone}
              />
            </div>
            <div className="line"> </div>
            <Button name="Далee" disabled={isSubmitting} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonRegistrationPage;
