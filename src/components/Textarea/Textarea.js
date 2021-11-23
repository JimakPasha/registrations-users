import React from 'react';
import { useField } from 'formik';
import './Textarea.scss';

const Textarea = ({ title, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="field-box field-box-textaria">
      <h5 className="field-box__title">{title}</h5>
      <textarea className="field-box__textaria field-box__field" {...field} />
    </div>
  );
};

export default Textarea;
