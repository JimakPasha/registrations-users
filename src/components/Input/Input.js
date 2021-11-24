import React from 'react';
import { Field, useField } from 'formik';
import './Input.scss';

const Input = ({ title, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
    <div className="field-box">
      <h5 className="field-box__title">{title}</h5>
      <Field
        className={
          meta.touched && meta.error
            ? 'field-box__input field-box__field field-box__input-error'
            : 'field-box__input field-box__field'
        }
        {...field}
        helpertext={errorText}
        error={!!errorText}
      />
      {meta.touched && meta.error && (
        <p className="field-box__error-text">{meta.error}</p>
      )}
    </div>
  );
};

export default Input;
