import * as yup from 'yup';

const dateValidate = (
  value: string | undefined
): boolean | yup.ValidationError | Promise<boolean | yup.ValidationError> => {
  if (value) {
    const arr = value.split('/');
    if (
      +arr[0] < 32 &&
      +arr[1] < 13 &&
      +arr[2] <= new Date().getFullYear() &&
      +arr[2] > +String(new Date().getFullYear() - 120)
    ) {
      return true;
    }
    return false;
  }
  return false; // todo!!! return null
};

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('Заполните это поле')
    .matches(/^[a-zA-Z ]+$/, 'Допустимы только буквы')
    .max(38, 'Слишком длинное имя'),
  surName: yup
    .string()
    .required('Заполните это поле')
    .matches(/^[a-zA-Z ]+$/, 'Допустимы только буквы')
    .max(38, 'Слишком длинная фамилия'),
  patronymic: yup
    .string()
    .required('Заполните это поле')
    .matches(/^[a-zA-Z ]+$/, 'Допустимы только буквы')
    .max(24, 'Слишком длинная фамилия')
    .matches(/^[a-zA-Z ]+$/, 'Допустимы только буквы')
    .max(38, 'Слишком длинное отчество'),
  date: yup
    .string()
    .required('Заполните это поле')
    .min(10, 'Заполните это поле')
    .test('innValid', 'Некорректная дата', (value) => dateValidate(value)),
  address: yup
    .string()
    .required('Заполните это поле')
    .max(68, 'Слишком много символов'),
  motherlastName: yup
    .string()
    .required('Заполните это поле')
    .matches(/^[a-zA-Z ]+$/, 'Допустимы только буквы')
    .max(38, 'Слишком длинная фамилия'),
  codeword: yup
    .string()
    .required('Заполните это поле')
    .matches(/^[a-zA-Z ]+$/, 'Допустимы только буквы')
    .matches(/^[^ ]+$/, 'Пробел запрещён')
    .max(38, 'Слишком длинное слово'),
  friendEmail: yup
    .string()
    .required('Заполните это поле')
    .max(68, 'Слишком длинный email')
    .email('Некорректный email'),
  phone: yup.string().required('Заполните это поле'),
});

export default validationSchema;
