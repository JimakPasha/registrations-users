import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import PopoverPersonalData from '../../components/PopoverPersonalData/PopoverPersonalData';
import PopoverCard from '../../components/PopoverCard/PopoverCard';
import './ResultRegistrationPage.scss';

const ResultRegistrationPage = () => {
  const [popoverPersonalData, setPopoverPersonalData] = useState(false);
  const [popoverCard, setPopoverCard] = useState(false);
  const history = useHistory();

  const dataUser = useSelector(
    (state) => state.dataRegestration.dataRegestration
  );

  const dataUsersList = useSelector(
    (state) => state.dataRegestration.dataRegestrationUsersList
  );

  const registrationMethod = useSelector(
    (state) => state.dataRegestration.registrationMethod
  );

  const openPopoverPersonalData = () => {
    setPopoverPersonalData(true);
  };

  const closePopoverPersonalData = () => {
    setPopoverPersonalData(false);
  };

  const openPopoverCard = () => {
    setPopoverCard(true);
  };

  const closePopoverCard = () => {
    setPopoverCard(false);
  };

  const editData = () => {
    history.push('/registration/personal');
  };

  return (
    <div className="result-reg-page box">
      <h4 className="result-reg-page__title">Личные данные</h4>
      <div className="result-reg-page__table table">
        <ul className="table__row">
          <li className="table__item name">Имя</li>
          <li className="table__item surName">Фамилия</li>
          <li className="table__item patronymic">Отчество</li>
          <li className="table__item date">Дата рождения</li>
          <li className="table__item sex">Пол</li>
          <li className="table__item country">Страна</li>
          <li className="table__item info">
            {registrationMethod === 'personal' ? 'Доп.инфо' : 'Править'}
          </li>
        </ul>
        {registrationMethod === 'personal' ? (
          <>
            <ul className="table__row">
              <li className="table__item table__item-user name">
                {dataUser.firstName}
              </li>
              <li className="table__item table__item-user surName">
                {dataUser.surName}
              </li>
              <li className="table__item table__item-user patronymic">
                {dataUser.patronymic}
              </li>
              <li className="table__item table__item-user date">
                {dataUser.date}
              </li>
              <li className="table__item table__item-user sex">
                {dataUser.sex}
              </li>
              <li className="table__item table__item-user country">
                {dataUser.country}
              </li>
              <li className="table__item table__item-user info">
                <span
                  className="info__text"
                  onClick={openPopoverPersonalData}
                  onMouseEnter={openPopoverPersonalData}
                  onMouseLeave={closePopoverPersonalData}
                  onKeyPress={openPopoverPersonalData}
                  role="button"
                  tabIndex={0}
                >
                  Доп. инфо
                  {popoverPersonalData && (
                    <PopoverPersonalData
                      address={dataUser.address}
                      motherlastName={dataUser.motherlastName}
                      codeword={dataUser.codeword}
                      infoAboutUs={dataUser.infoAboutUs}
                      friendEmail={dataUser.friendEmail}
                      phoneGirlfriend={dataUser.phoneGirlfriend}
                      favorite={dataUser.favorite}
                    />
                  )}
                </span>
              </li>
            </ul>
            <div
              className="table__data-card"
              onClick={openPopoverCard}
              onMouseEnter={openPopoverCard}
              onMouseLeave={closePopoverCard}
              onKeyPress={openPopoverCard}
              role="button"
              tabIndex={0}
            >
              Данные кредитной карты
              {popoverCard && (
                <PopoverCard
                  cardNumber={dataUser.cardNumber}
                  cardValidity={dataUser.cardValidity}
                  cardCvc={dataUser.cardCvc}
                  cardType={dataUser.cardType}
                />
              )}
            </div>
          </>
        ) : (
          dataUsersList.map(
            ({ id, firstName, surName, patronymic, sex, date, country }) => {
              return (
                <ul className="table__row" key={id}>
                  <li className="table__item table__item-user name">
                    {firstName}
                  </li>
                  <li className="table__item table__item-user surName">
                    {surName}
                  </li>
                  <li className="table__item table__item-user patronymic">
                    {patronymic}
                  </li>
                  <li className="table__item table__item-user date">{date}</li>
                  <li className="table__item table__item-user sex">{sex}</li>
                  <li className="table__item table__item-user country">
                    {country}
                  </li>
                  <li className="table__item table__item-user info">
                    <span
                      className="info__text"
                      onClick={editData()}
                      onKeyPress={editData()}
                      role="button"
                      tabIndex={0}
                    >
                      Править
                    </span>
                  </li>
                </ul>
              );
            }
          )
        )}
      </div>
      <div className="line"> </div>
      <div className="button-box result-reg-page__btn">
        <Button name="Сохранить" />
      </div>
    </div>
  );
};

export default ResultRegistrationPage;
