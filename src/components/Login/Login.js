import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import loginStyles from './loginStyles.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import authService from '../../services/authService.js';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let summonerName = formData.get('summoner-name');
    let password = formData.get('password');

    try {
      let authData = await authService.login(summonerName, password);
      login(authData);
      navigate('/');
    } catch (err) {
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
          <label htmlFor='summoner-name' className={loginStyles.label}>
            Summoner Name
          </label>
          <input
            type='text'
            name='summoner-name'
            id='summoner-name'
            placeholder='John'
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
