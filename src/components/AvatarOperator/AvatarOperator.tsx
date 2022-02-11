import React from 'react';
import avatar from '../../assets/avatar-operator.jpg';
import './AvatarOperator.scss';

const AvatarOperator: React.FC = () => {
  return <img className="avatar-operator" src={avatar} alt="avatar" />;
};

export default AvatarOperator;
