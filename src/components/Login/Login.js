import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import loginStyles from './loginStyles.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
import authService from '../../services/authService.js';
import {
  useNotificationContext,
  types,
} from '../../contexts/NotificationContext.js';
import validationSchema from '../../helpers/validationSchema.js';

function Login() {
  const { login } = useAuthContext();
  const { addNotification } = useNotificationContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema.login) });

  const onSubmitHandler = async ({ email, password }) => {
    try {
      let authData = await authService.login(email, password);
      login(authData);
      addNotification('Successfully logged in!', types.success);
      navigate('/');
    } catch (err) {
      addNotification('Wrong username or password!', types.danger);
      console.log(err);
    }
  };

  return (
    <div className={loginStyles.main}>
      <div className={loginStyles.box}>
        <h1 className={loginStyles.heading}>
          Hello there 👋, please enter your credentials to access your account
        </h1>
        <form
          className='mt-6'
          method='POST'
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <label htmlFor='email' className={loginStyles.label}>
            Email
          </label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='example@example.com'
            className={loginStyles.input}
            {...register('email')}
          />
          <p className={loginStyles.error}>{errors.email?.message}</p>
          <label htmlFor='password' className={loginStyles.label}>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='********'
            className={loginStyles.input}
            {...register('password')}
          />
          <p className={loginStyles.error}>{errors.password?.message}</p>
          <button type='submit' className={loginStyles.submit}>
            Login
          </button>
          <Link to='/register'>
            <p className={loginStyles.p}>Not registered yet?</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
