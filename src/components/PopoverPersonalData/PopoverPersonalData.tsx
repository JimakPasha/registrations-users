import React from 'react';

interface Props {
  address: string;
  motherlastName: string;
  codeword: string;
  infoAboutUs: string;
  friendEmail: string;
  phone: string;
  favorite: string;
}

const PopoverPersonalData: React.FC<Props> = ({
  address,
  motherlastName,
  codeword,
  infoAboutUs,
  friendEmail,
  phone,
  favorite,
}: Props) => {
  return (
    <div className="popover">
      <ul className="popover__list">
        <li className="popover__item">
          <h6 className="popover__title">Адрес, почтовый индекс:</h6>
          <p className="popover__text">{address}</p>
        </li>
        <li className="popover__item">
          <h6 className="popover__title">Девичья фамилия матери:</h6>
          <p className="popover__text">{motherlastName}</p>
        </li>
        <li className="popover__item">
          <h6 className="popover__title">Кодовое слово в вашем банке:</h6>
          <p className="popover__text">{codeword}</p>
        </li>
        <li className="popover__item">
          <h6 className="popover__title">Как вы узнали о нашем сайте:</h6>
          <p className="popover__text">{infoAboutUs}</p>
        </li>
        <li className="popover__item">
          <h6 className="popover__title">Email друга:</h6>
          <p className="popover__text">{friendEmail}</p>
        </li>
        <li className="popover__item">
          <h6 className="popover__title">Номер телефона своей девушки:</h6>
          <p className="popover__text">{phone}</p>
        </li>
        <li className="popover__item">
          <h6 className="popover__title">Любимая футбольная команда:</h6>
          <p className="popover__text">{favorite}</p>
        </li>
      </ul>
    </div>
  );
};

export default PopoverPersonalData;
