import * as yup from 'yup';

const register = yup
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

const login = yup
  .object()
  .shape({
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

const validationSchema = {
  register,
  login,
};

export default validationSchema;
