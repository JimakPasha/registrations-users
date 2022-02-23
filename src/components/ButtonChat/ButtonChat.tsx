import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { chatOn, chatOff } from '../../redux/actions';
import AvatarOperator from '../AvatarOperator/AvatarOperator';
import './ButtonChat.scss';

const ButtonChat: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useTypedSelector((state) => state.chatActive);

  const handleClick = () => {
    if (isOpen) {
      dispatch(chatOff());
    } else {
      dispatch(chatOn());
    }
  };

  return (
    <button type="button" className="button-chat" onClick={handleClick}>
      <AvatarOperator />
    </button>
  );
};

export default ButtonChat;
