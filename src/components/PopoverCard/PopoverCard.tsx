import React from 'react';

interface Props {
  cardNumber: string;
  cardValidity: string;
  cardCvc: string;
  cardType: string;
}

const PopoverCard: React.FC<Props> = ({
  cardNumber,
  cardValidity,
  cardCvc,
  cardType,
}: Props) => {
  return (
    <div className="popover popover--card">
      <ul className="popover__list">
        <li className="popover__item">
          <h6 className="popover__title">Номер карты:</h6>
          <p className="popover__text">{cardNumber}</p>
        </li>
        <li className="popover__item">
          <h6 className="popover__title">Месяц / год:</h6>
          <p className="popover__text">{cardValidity}</p>
        </li>
        <li className="popover__item">
          <h6 className="popover__title">CVC2 или CVV2:</h6>
          <p className="popover__text">{cardCvc}</p>
        </li>
        <li className="popover__item">
          <h6 className="popover__title">Тип карты:</h6>
          <p className="popover__text">{cardType}</p>
        </li>
      </ul>
    </div>
  );
};

export default PopoverCard;
