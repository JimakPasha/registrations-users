import React from 'react';
import './Button.scss';

interface Props {
  name: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ name, disabled, onClick }: Props) => {
  return (
    <button
      className="button"
      type={onClick ? 'button' : 'submit'}
      disabled={disabled}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
