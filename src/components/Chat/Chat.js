import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import messagesOperator from '../../mocks/messagesOperator';
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
    setMessagesHistory((prev) => [...prev, messageUser]);
    setMessageUser('');
    setTimeout(() => {
      setMessagesHistory((prev) => [
        ...prev,
        messagesOperator[randomizerIndex()],
      ]);
    }, 1000);
  };

  return (
    <div className="chat box">
      <ul className="chat__list-messages">
        {messagesHistory.map((item) => {
          const id = nanoid();
          return (
            <li className="chat__list-item" key={id}>
              {item}
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
        />
        <button className="chat__form-btn" type="submit">
          -
        </button>
      </form>
    </div>
  );
};

export default Chat;
