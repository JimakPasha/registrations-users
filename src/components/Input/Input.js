import React from 'react';
import { Field, useField } from 'formik';
import InputMask from 'react-input-mask';
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

  const defineMask = () => {
    if (classModifier === 'date') {
      return '99/99/9999';
    }
    if (classModifier === 'phone') {
      return '+999 99 999-99-99';
    }
    return null;
  };

  const definePlaceholder = () => {
    if (classModifier === 'date') {
      return '__/__/____';
    }
    if (classModifier === 'phone') {
      return '+___ __ ___-__-__';
    }
    return null;
  };

  return (
    <div className="field-box">
      <h5 className="field-box__title">{title}</h5>
      <InputMask
        className={
          meta.touched && meta.error
            ? `field-box__input ${classModifier} field-box__field field-box__input-error`
            : `field-box__input ${classModifier} field-box__field`
        }
        mask={defineMask()}
        placeholder={definePlaceholder()}
        {...field}
        helpertext={errorText}
        error={!!errorText}
        type={classModifier === 'cvc' && 'password'}
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
