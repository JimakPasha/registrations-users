interface ImasksInputConstant {
  date: string;
  'phone-local': string;
  'phone-global': string;
  card: string;
  cardDate: string;
  cvc: string;
}

const masksInputConstant: ImasksInputConstant = {
  date: '99/99/9999',
  'phone-local': '+999 99 999-99-99',
  'phone-global': '+9 99 999-99-99',
  card: '9999 9999 9999 9999',
  cardDate: '99/99',
  cvc: '999',
};

export default masksInputConstant;
