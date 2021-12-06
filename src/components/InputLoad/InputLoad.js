import React from 'react';
import { Field, useField } from 'formik';

const InputLoad = ({ title, type, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="field-box">
      <h5 className="field-box__title">{title}</h5>
      <Field className="start-reg-page__load-input" type={type} {...field} />
    </div>
  );
};

export default InputLoad;
