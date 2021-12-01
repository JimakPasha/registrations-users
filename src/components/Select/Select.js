import React from 'react';
import { useField } from 'formik';
import { country, footballteams, fryingPan } from '../../mocks/options';
import './Select.scss';

const Select = ({ title, classModifier, checkDisable, ...props }) => {
  const [field] = useField(props);

  const checkArrList = () => {
    switch (classModifier) {
      case 'country':
        return country.map(({ name }) => {
          return <option>{name}</option>;
        });
      case 'favorite-football':
        return footballteams.map(({ name }) => {
          return <option>{name}</option>;
        });
      case 'favorite-fryingPan':
        return fryingPan.map(({ name }) => {
          return <option>{name}</option>;
        });
      default:
        return null;
    }
  };

  return (
    <div className="field-box">
      <h5 className="field-box__title">{title}</h5>
      <select
        {...field}
        className={`field-box__select ${classModifier}`}
        disabled={checkDisable === 'phone-global'}
      >
        {checkArrList()}
      </select>
    </div>
  );
};

export default Select;
