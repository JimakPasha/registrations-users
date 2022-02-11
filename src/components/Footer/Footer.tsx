import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__text-c">© 2016 Городской сайт</p>
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__item-link" href="/">
                Пользовательское соглашение
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__item-link" href="/">
                Инструкции
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__item-link" href="/">
                Рекламодателям
              </a>
            </li>
          </ul>
          <p className="footer__text-create">Сделано в Беларуси</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
