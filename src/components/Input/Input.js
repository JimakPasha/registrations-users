import React from 'react';
import { useField } from 'formik';
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
      case 'phone-local':
        return (
          <span className={`field-box__descr ${classModifier}`}>
            Только Беларусь
          </span>
        );
      case 'phone-global':
        return (
          <span className={`field-box__descr ${classModifier}`}>
            Международный
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
    if (classModifier === 'phone-local') {
      return '+999 99 999-99-99';
    }
    if (classModifier === 'phone-global') {
      return '+9 99 999-99-99';
    }
    if (classModifier === 'card') {
      return '9999 9999 9999 9999';
    }
    if (classModifier === 'cardDate') {
      return '99/99';
    }
    if (classModifier === 'cvc') {
      return '999';
    }
    return null;
  };

  const defineMaskChar = () => {
    if (
      classModifier === 'date' ||
      classModifier === 'phone-local' ||
      classModifier === 'phone-global' ||
      classModifier === 'card' ||
      classModifier === 'cardDate' ||
      classModifier === 'cvc'
    ) {
      return '';
    }
    return null;
  };

  const defineType = () => {
    if (classModifier === 'cvc') {
      return 'password';
    }
    if (classModifier === 'password') {
      return 'password';
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
        maskChar={defineMaskChar()}
        {...field}
        helpertext={errorText}
        error={!!errorText}
        type={defineType()}
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
