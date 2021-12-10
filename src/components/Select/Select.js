import React, { useEffect, useState } from 'react';
import { useField } from 'formik';
import { country, footballteams, fryingPan } from '../../mocks/options';
import './Select.scss';

export default function Select({
  setFieldValue,
  name,
  classModifier,
  title,
  typeTel,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const [typeSelect, setTypeSelect] = useState(false);
  const [field] = useField(props);

  const changeValue = async () => {
    await setFieldValue(name, value);
  };

  const checkedTelType = (typeTelValue) => {
    if (typeTelValue) {
      return typeTelValue.split(' ')[0] !== '+375';
    }
    return null;
  };

  useEffect(() => {
    changeValue();
  }, [value]);

  useEffect(() => {
    if (name === 'favorite') {
      setTypeSelect(checkedTelType(typeTel));
    }
  }, [typeTel]);

  const checkArrList = () => {
    switch (classModifier) {
      case 'country':
        return country;
      case 'favorite-football':
        return footballteams;
      case 'favorite-fryingPan':
        return fryingPan;
      default:
        return null;
    }
  };

  return (
    <div className="field-box">
      <h5 className="field-box__title">{title}</h5>
      <div className="form-input-select">
        <div
          className="control"
          onClick={() => setOpen((prev) => (typeSelect ? prev : !prev))}
          onKeyPress={() => setOpen((prev) => !prev)}
          role="button"
          tabIndex={0}
        >
          <input
            autoComplete="off"
            {...field}
            disabled={typeSelect}
            {...props}
            className="selected-value"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onClick={() => setValue('')}
          />
          <div
            className="arrow-wrapper"
            onClick={() => setValue('')}
            onKeyPress={() => setValue('')}
            role="button"
            tabIndex={0}
          >
            <div className={`arrow  ${open ? 'open' : null}`} />
          </div>
        </div>
        <div className={`options  ${open ? 'open' : null} `}>
          {checkArrList()
            .filter(({ nameOption }) => {
              return (
                nameOption.toLowerCase().includes(value.toLowerCase()) === true
              );
            })
            .map(({ nameOption, id }) => {
              return (
                <div
                  key={id}
                  className={`option ${
                    value === nameOption ? 'selected' : null
                  }`}
                  onClick={() => {
                    setValue(nameOption);
                    setOpen(false);
                  }}
                  onKeyPress={() => {
                    setValue(nameOption);
                    setOpen(false);
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {nameOption}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
