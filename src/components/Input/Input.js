import React from 'react';
import { useField } from 'formik';
import InputMask from 'react-input-mask';
import masksInputConstant from '../../constants/MasksInputConstant';
import descriptionInputConstant from '../../constants/DescriptionInputConstant';
import maskCharInputConstant from '../../constants/MaskCharInputConstant';
import typeInputConstant from '../../constants/TypeInputConstant';

const Input = ({ title, classModifier, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <div className="field-box">
      <h5 className="field-box__title">{title}</h5>
      <InputMask
        className={
          meta.touched && meta.error
            ? `field-box__input ${classModifier} field-box__field field-box__input-error`
            : `field-box__input ${classModifier} field-box__field`
        }
        mask={masksInputConstant[classModifier]}
        maskChar={maskCharInputConstant[classModifier]}
        {...field}
        helpertext={errorText}
        error={errorText}
        type={typeInputConstant[classModifier]}
      />
      {classModifier && (
        <div className={`field-box__descr ${classModifier}`}>
          {descriptionInputConstant[classModifier]}
        </div>
      )}
      {meta.touched && meta.error && (
        <p className="field-box__error-text">{meta.error}</p>
      )}
    </div>
  );
};

export default Input;
