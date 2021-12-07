import * as yup from 'yup';

const dateValidate = (value) => {
  if (value) {
    const arr = value.split('/');
    if (
      arr[0] < 13 &&
      arr[1] > String(new Date().getFullYear() - 1).substr(-2, 2)
    ) {
      return true;
    }
    return false;
  }
  return null;
};

const validationSchema = yup.object({
  cardNumber: yup
    .string()
    .required('Заполните это поле')
    .min(19, 'Заполните это поле'),
  cardValidity: yup
    .string()
    .required('Заполните это поле')
    .min(5, 'Заполните это поле')
    .test('innValid', 'Некорректная дата', (value) => dateValidate(value)),
  cardCvc: yup
    .string()
    .required('Заполните это поле')
    .min(3, 'Заполните это поле'),
  cardType: yup.string().required('Заполните это поле'),
});

export default validationSchema;
