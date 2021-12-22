import * as yup from 'yup';

const validationSchema = yup
  .object()
  .shape({
    summonerName: yup
      .string()
      .required('Summoner name is required!')
      .min(6, 'Summoner name must be at least 6 characters!'),
    email: yup
      .string()
      .required('E-mail is required!')
      .email('Invalid e-mail address!'),
    password: yup
      .string()
      .required('Password is required!')
      .min(6, 'Password nmust be at least 6 characters!'),
  })
  .required();

export default validationSchema;
