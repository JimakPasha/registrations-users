import React from 'react';
import { useHistory } from 'react-router-dom';
import './ButtonGoBack.scss';

const ButtonGoBack = ({ name }) => {
  const history = useHistory();

  return (
    <button
      className="button-back"
      type="button"
      onClick={() => history.goBack()}
    >
      {name}
    </button>
  );
};

export default ButtonGoBack;
