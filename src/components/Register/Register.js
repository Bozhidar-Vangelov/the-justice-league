import registerStyles from './registerStyles.js';

function Register() {
  return (
    <div className={registerStyles.main}>
      <div className={registerStyles.box}>
        <h1 className={registerStyles.heading}>
          Hello there 👋, please enter your credentials to get access account
        </h1>
        <form className='mt-6'>
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
          <label htmlFor='password-confirm' className={registerStyles.label}>
            Confirm password
          </label>
          <input
            type='password'
            name='password-confirm'
            id='password-confirm'
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
