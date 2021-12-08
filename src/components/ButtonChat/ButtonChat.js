import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chatOn, chatOff } from '../../redux/actions';
import AvatarOperator from '../AvatarOperator/AvatarOperator';
import './ButtonChat.scss';

const ButtonChat = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.chatActive);

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
