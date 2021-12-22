import * as yup from 'yup';

const register = yup
  .object()
  .shape({
    summonerName: yup
      .string()
      .required('Summoner name is required!')
      .min(6, 'Summoner name must contain at least 6 characters!'),
    avatar: yup.string().required('Image URL is required!').url('Invalid url!'),
    email: yup
      .string()
      .required('E-mail is required!')
      .email('Invalid e-mail address!'),
    password: yup
      .string()
      .required('Password is required!')
      .min(6, 'Password nmust contain at least 6 characters!'),
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
      .min(6, 'Password must contain at least 6 characters!'),
  })
  .required();

const createPost = yup
  .object()
  .shape({
    topic: yup
      .string()
      .required('Topic is required!')
      .min(6, 'Topic must contain at least 6 characters!')
      .max(30, 'Topic must contain maximum 30 characters!'),
    description: yup
      .string()
      .required('Description is required!')
      .min(10, 'Description must contain at least 10 characters!'),
    type: yup
      .string()
      .required()
      .matches(/[A-Z][a-z]*/gm, 'Type is required!'),
    image: yup.string().required('Image URL is required!').url('Invalid url!'),
  })
  .required();

const validationSchema = {
  register,
  login,
  createPost,
};

export default validationSchema;
