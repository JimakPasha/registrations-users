interface IdescriptionInputConstant {
  address: string;
  'phone-local': string;
  'phone-global': string;
  cvc: string;
}

const descriptionInputConstant: IdescriptionInputConstant = {
  address: 'Узнать индекс',
  'phone-local': 'Только Беларусь',
  'phone-global': 'Международный',
  cvc: '3 цифры',
};

export default descriptionInputConstant;
