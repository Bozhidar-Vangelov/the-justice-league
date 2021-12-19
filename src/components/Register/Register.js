import { useNavigate } from 'react-router-dom';

import registerStyles from './registerStyles.js';
import authService from '../../services/authService.js';
import { useAuthContext } from '../../contexts/AuthContext.js';

function Register() {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.target);
    let summonerName = formData.get('summoner-name');
    let email = formData.get('email');
    let password = formData.get('password');

    let registerData = await authService.register(
      summonerName,
      email,
      password
    );

    login(registerData);
    navigate('/');
  };

  return (
    <div className={registerStyles.main}>
      <div className={registerStyles.box}>
        <h1 className={registerStyles.heading}>
          Hello there 👋, please enter your credentials to get access account
        </h1>
        <form className='mt-6' method='POST' onSubmit={onSubmitHandler}>
          <label htmlFor='summoner-name' className={registerStyles.label}>
            Summoner Name
          </label>
          <input
            type='text'
            name='summoner-name'
            id='summoner-name'
            placeholder='John'
            className={registerStyles.input}
            required
          />
          <label htmlFor='email' className={registerStyles.label}>
            E-mail
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='john.doe@company.com'
            className={registerStyles.input}
            required
          />
          <label htmlFor='password' className={registerStyles.label}>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='********'
            className={registerStyles.input}
            required
          />
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
