import React from 'react';
import { Field, useField } from 'formik';

interface Props {
  name: string;
  type: string;
  title: string;
  value: string;
}

const Radio: React.FC<Props> = ({ title, ...props }: Props) => {
  const [field] = useField(props);
  return (
    <label className="field-box__radio-label" htmlFor={title}>
      <Field {...field} type="radio" className="field-box__radio-btn-hidden" />
      <span className="field-box__radio-btn-visible"> </span>
      {title}
    </label>
  );
};

export default Radio;
