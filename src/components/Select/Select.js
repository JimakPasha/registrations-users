import React from 'react';
import { useField } from 'formik';
import './Select.scss';

const Select = ({ title, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="field-box">
      <h5 className="field-box__title">{title}</h5>
      <select {...field}>
        <option>Беларусь</option>
        <option>Россия</option>
        <option>Украина</option>
        <option>Казахстан</option>
        <option>Катар</option>
      </select>
    </div>
  );
};

export default Select;
