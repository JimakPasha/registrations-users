import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import messagesOperator from '../../mocks/messagesOperator';
import AvatarOperator from '../AvatarOperator/AvatarOperator';
import arrow from '../../assets/right-arrows.png';
import './Chat.scss';

const Chat = () => {
  const [messageUser, setMessageUser] = useState('');
  const [messagesHistory, setMessagesHistory] = useState([]);

  const randomizerIndex = () => {
    const index = Math.floor(Math.random() * messagesOperator.length);
    if (index === 0) {
      return index + 1;
    }
    return index;
  };

  useEffect(() => {
    setMessagesHistory((prev) => [...prev, messagesOperator[0]]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageUser) {
      setMessagesHistory((prev) => [
        ...prev,
        { id: nanoid(), message: messageUser, operator: false },
      ]);
      setMessageUser('');
      setTimeout(() => {
        setMessagesHistory((prev) => [
          ...prev,
          messagesOperator[randomizerIndex()],
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat box">
      <div className="chat__operator-conect">
        <AvatarOperator />
        <p className="chat__operator-connect-text">Анна в чате</p>
        <div className="chat__operator-connect-state"> </div>
      </div>
      <ul className="chat__list-messages">
        {messagesHistory.map(({ id, message, operator }) => {
          return operator ? (
            <div className="chat__list-item-box" key={id}>
              <div className="chat__list-item-avatar">
                <AvatarOperator />
              </div>
              <li className="chat__list-item admin">{message}</li>
            </div>
          ) : (
            <li className="chat__list-item user" key={id}>
              {message}
            </li>
          );
        })}
      </ul>
      <form className="chat__form" onSubmit={handleSubmit}>
        <textarea
          className="chat__form-textarea"
          placeholder="Ваше сообщение..."
          value={messageUser}
          onChange={(e) => setMessageUser(e.target.value)}
          maxLength={40}
        />
        <button className="chat__form-btn" type="submit">
          <img className="chat__form-btn-img" src={arrow} alt="arrow" />
        </button>
      </form>
    </div>
  );
};

export default Chat;
