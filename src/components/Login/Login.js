import { useNavigate } from 'react-router-dom';

import loginStyles from './loginStyles.js';
import { useAuthContext } from '../../contexts/AuthContext.js';
import authService from '../../services/authService.js';
import { useNotificationContext } from '../../contexts/NotificationContext.js';

function Login() {
  const { login } = useAuthContext();
  const { addNotification } = useNotificationContext();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let email = formData.get('email');
    let password = formData.get('password');

    try {
      let authData = await authService.login(email, password);
      login(authData);
      addNotification('Successfully logged in!', 'success');
      navigate('/');
    } catch (err) {
      addNotification('Login unsuccessful, please try again', 'danger');

      console.log(err);
    }
  };

  return (
    <div className={loginStyles.main}>
      <div className={loginStyles.box}>
        <h1 className={loginStyles.heading}>
          Hello there 👋, please enter your credentials to access your account
        </h1>
        <form className='mt-6' method='POST' onSubmit={onSubmitHandler}>
          <label htmlFor='email' className={loginStyles.label}>
            Email
          </label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='example@example.com'
            className={loginStyles.input}
            required
          />
          <label htmlFor='password' className={loginStyles.label}>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='********'
            className={loginStyles.input}
            required
          />
          <button type='submit' className={loginStyles.submit}>
            Login
          </button>
          <p className={loginStyles.p}>Not registered yet?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
