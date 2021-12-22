import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import registerStyles from './registerStyles.js';
import authService from '../../services/authService.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
import {
  useNotificationContext,
  types,
} from '../../contexts/NotificationContext.js';
import validationSchema from '../../helpers/validationSchema.js';

function Register() {
  const { login } = useAuthContext();
  const { addNotification } = useNotificationContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema.register) });

  const onSubmitHandler = async ({ summonerName, avatar, email, password }) => {
    try {
      let registerData = await authService.register(
        summonerName,
        avatar,
        email,
        password
      );

      login(registerData);
      navigate('/');
    } catch (err) {
      addNotification('E-mail already exist!', types.danger);
      console.log(err);
    }
  };

  return (
    <div className={registerStyles.main}>
      <div className={registerStyles.box}>
        <h1 className={registerStyles.heading}>
          Hello there 👋, please enter your credentials to get access account
        </h1>
        <form
          className='mt-6'
          method='POST'
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <label htmlFor='summoner-name' className={registerStyles.label}>
            Summoner Name
          </label>
          <input
            type='text'
            name='summoner-name'
            id='summoner-name'
            placeholder='John'
            className={registerStyles.input}
            {...register('summonerName')}
          />
          <p className={registerStyles.error}>{errors.summonerName?.message}</p>
          <label htmlFor='avatar' className={registerStyles.label}>
            Avatar URL
          </label>
          <input
            type='text'
            name='avatar'
            id='avatar'
            placeholder='Avatar'
            className={registerStyles.input}
            {...register('avatar')}
          />
          <p className={registerStyles.error}>{errors.avatar?.message}</p>
          <label htmlFor='email' className={registerStyles.label}>
            E-mail
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='john.doe@company.com'
            className={registerStyles.input}
            {...register('email')}
          />
          <p className={registerStyles.error}>{errors.email?.message}</p>
          <label htmlFor='password' className={registerStyles.label}>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='********'
            className={registerStyles.input}
            {...register('password')}
          />
          <p className={registerStyles.error}>{errors.password?.message}</p>
          <button type='submit' className={registerStyles.submit}>
            Sign up
          </button>
          <p className={registerStyles.p}>Already registered?</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
