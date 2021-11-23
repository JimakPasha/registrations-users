import { nanoid } from 'nanoid';

const messagesOperator = [
  {
    id: nanoid(),
    message:
      'Здравствуйте! Пишите мне, если у вас возникнут вопросы по работе сайта.',
    operator: true,
  },
  {
    id: nanoid(),
    message: 'Вопросов точно нет?',
    operator: true,
  },
  {
    id: nanoid(),
    message: 'Вопросов нет, или вы стесняетесь?',
    operator: true,
  },
  {
    id: nanoid(),
    message: 'Супер классное приложение, правда?',
    operator: true,
  },
];

export default messagesOperator;
