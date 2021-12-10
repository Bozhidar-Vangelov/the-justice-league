import loginStyles from './loginStyles.js';

function Login() {
  return (
    <div className={loginStyles.main}>
      <div className={loginStyles.box}>
        <h1 className={loginStyles.heading}>
          Hello there 👋, please enter your credentials to access your account
        </h1>
        <form className='mt-6'>
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
