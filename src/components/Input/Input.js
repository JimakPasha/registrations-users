import React from 'react';
import './Input.scss';

const Input = ({ name, formik }) => {
  return (
    <label className="input-box__label" htmlFor={name}>
      Имя
      <input
        className="input-box__input"
        type="text"
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name && (
        <div>{formik.errors.name}</div>
      )}
    </label>
  );
};

export default Input;
