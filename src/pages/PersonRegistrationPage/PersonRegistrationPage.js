import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './PersonRegistrationPage.scss';

const PersonRegistrationPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      surName: '',
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .max(20, 'Имя не должно быть более 20 букв')
        .required('Заполните это поле'),
      surName: Yup.string()
        .max(20, 'Имя не должно быть более 20 букв')
        .required('Заполните это поле'),
    }),
    onSubmit: (values) => console.log(values),
  });

  return (
    <div className="person-registration">
      <h5 className="person-registration__description">
        Все поля формы обязательны для заполнения
      </h5>
      <form
        className="person-registration__form"
        onSubmit={formik.handleSubmit}
      >

        <label className="person-registration__label" htmlFor="surName">
          Фамилия
          <input
            className="person-registration__input"
            type="text"
            name="surName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.surName}
          />
          {formik.touched.surName && formik.errors.surName && (
            <div>{formik.errors.surName}</div>
          )}
        </label>
        <button type="submit">Далее</button>
      </form>
    </div>
  );
};

export default PersonRegistrationPage;
