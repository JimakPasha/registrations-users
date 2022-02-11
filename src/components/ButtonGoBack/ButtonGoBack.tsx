import React from 'react';
import { useHistory } from 'react-router-dom';
import './ButtonGoBack.scss';

interface Props {
  name: string;
}

const ButtonGoBack: React.FC<Props> = ({ name }: Props) => {
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
