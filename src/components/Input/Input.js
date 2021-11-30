import React from 'react';
import { Field, useField } from 'formik';
import './Input.scss';

const Input = ({ title, classModifier, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  const renderDescription = () => {
    switch (classModifier) {
      case 'address':
        return (
          <a className={`field-box__descr ${classModifier}`} href="/">
            Узнать индекс
          </a>
        );
      case 'phone':
        return (
          <span className={`field-box__descr ${classModifier}`}>
            Только Беларусь
          </span>
        );
      case 'cvc':
        return (
          <a className={`field-box__descr ${classModifier}`} href="/">
            3 цифры
          </a>
        );
      default:
        return null;
    }
  };

  const defineType = () => {
    if (classModifier === 'date') {
      return 'date';
    }
    if (classModifier === 'cvc') {
      return 'password';
    }
    return null;
  };

  return (
    <div className="field-box">
      <h5 className="field-box__title">{title}</h5>
      <Field
        className={
          meta.touched && meta.error
            ? `field-box__input ${classModifier} field-box__field field-box__input-error`
            : `field-box__input ${classModifier} field-box__field`
        }
        {...field}
        helpertext={errorText}
        error={!!errorText}
        type={classModifier && defineType()}
        maxLength={classModifier === 'cvc' && 3}
      />
      {classModifier && renderDescription()}
      {meta.touched && meta.error && (
        <p className="field-box__error-text">{meta.error}</p>
      )}
    </div>
  );
};

export default Input;
