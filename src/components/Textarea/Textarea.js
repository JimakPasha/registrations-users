import React from 'react';
import { useField } from 'formik';
import './Textarea.scss';

const Textarea = ({ title, classModifier, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="field-box field-box-textaria">
      <h5 className="field-box__title">{title}</h5>
      <textarea className="field-box__textaria field-box__field" {...field} />
      {classModifier === 'info' && (
        <span className={`field-box__descr ${classModifier}`}>
          Из газет,
          <br /> телевидения,
          <br /> радио или проч.
        </span>
      )}
    </div>
  );
};

export default Textarea;
