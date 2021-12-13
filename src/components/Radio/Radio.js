import React from 'react';
import { Field, useField } from 'formik';

const Radio = ({ label, title, ...props }) => {
  const [field] = useField(props);
  return (
    <label className="field-box__radio-label" htmlFor={label}>
      <Field {...field} type="radio" className="field-box__radio-btn-hidden" />
      <span className="field-box__radio-btn-visible"> </span>
      {title}
    </label>
  );
};

export default Radio;
