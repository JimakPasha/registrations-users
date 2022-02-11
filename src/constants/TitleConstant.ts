interface ItitleConstant {
  Имя: string;
  Фамилия: string;
  Отчество: string;
  'Дата рождения': string;
  Пол: string;
  Страна: string;
}

const titleConstant: ItitleConstant = {
  Имя: 'firstName',
  Фамилия: 'surName',
  Отчество: 'patronymic',
  'Дата рождения': 'date',
  Пол: 'sex',
  Страна: 'country',
};

export default titleConstant;
