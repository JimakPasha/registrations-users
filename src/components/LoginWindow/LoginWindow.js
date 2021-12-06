import React from 'react';
import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { auth } from '../../firebase.config';
import { authentication } from '../../redux/actions';
import './LoginWindow.scss';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Заполните это поле')
    .email('Некорректный email'),
  password: yup
    .string()
    .required('Заполните это поле')
    .min(8, 'Минимум 8 символов')
    .max(28, 'Минимум 28 символов'),
});

const LoginWindow = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const provider = new GoogleAuthProvider();

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      dispatch(authentication());
      history.push('/');
    });
  };

  const loginWithEmail = (data) => {
    const { email, password } = data;
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      dispatch(authentication());
      history.push('/');
    });
  };

  return (
    <div className="login box">
      <h3 className="login__title">Впервые на нашем сайте?</h3>
      <p className="login__description">Моментальная регистрация</p>
      <div className="login__form">
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          onSubmit={(data) => {
            loginWithEmail(data);
          }}
        >
          {() => (
            <Form>
              <Input name="email" type="input" title="Email:" />
              <Input
                name="password"
                type="input"
                title="Пароль:"
                classModifier="password"
              />
              <Button name="Зарегестрироваться" />
            </Form>
          )}
        </Formik>
      </div>
      <div className="login__or">или</div>
      <Button
        name="Авторизируйтесь с помощью аккаунта Google"
        onClick={loginWithGoogle}
      />
    </div>
  );
};

export default LoginWindow;
