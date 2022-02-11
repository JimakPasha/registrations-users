import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { auth } from '../../firebase.config';
import { authentication } from '../../redux/actions';
import './SignInWindow.scss';
import { ILoginSignIn } from '../../models/ILoginSignIn';

const validationSchema = yup.object({
  email: yup
    .string()
    .required('Заполните это поле')
    .email('Некорректный email'),
  password: yup.string().required('Заполните это поле'),
});

const SignInWindow: React.FC = () => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const dispatch = useDispatch();

  const initialValuesForm: ILoginSignIn = { email: '', password: '' };

  const signInWithEmail = ({ email, password }: ILoginSignIn): void => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch(authentication());
      })
      .catch((error) => {
        setErrorMessage(error.code);
      });
  };

  const defineError = (errorMessageType: string): string => {
    switch (errorMessageType) {
      case 'auth/wrong-password':
        return 'Не верный пароль';
      case 'auth/user-not-found':
        return 'Пользователь не найден';
      default:
        return 'Произолша неизвестная ошибка';
    }
  };

  return (
    <div className="sign-in box">
      <h3 className="sign-in__title">Войдите, чтобы получить доступ к сайту</h3>
      <div className="sign-in__form">
        <Formik
          initialValues={initialValuesForm}
          validationSchema={validationSchema}
          onSubmit={(data: ILoginSignIn) => {
            signInWithEmail(data);
          }}
        >
          {() => (
            <Form>
              {errorMessage && (
                <p className="sign-in__error-message">
                  {defineError(errorMessage)}
                </p>
              )}
              <Input name="email" type="input" title="Email:" />
              <Input
                name="password"
                type="input"
                title="Пароль:"
                classModifier="password"
              />
              <Button name="Войти" />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInWindow;
