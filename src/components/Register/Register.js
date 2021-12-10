import styles from './registerStyles.js';

function Register() {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <h1 className={styles.heading}>
          Hello there 👋, please enter your credentials to get access account
        </h1>
        <form className='mt-6'>
          <label htmlFor='summoner-name' className={styles.label}>
            Summoner Name
          </label>
          <input
            type='text'
            name='summoner-name'
            id='summoner-name'
            placeholder='John'
            className={styles.input}
            required
          />
          <label htmlFor='email' className={styles.label}>
            E-mail
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='john.doe@company.com'
            className={styles.input}
            required
          />
          <label htmlFor='password' className={styles.label}>
            Password
          </label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder='********'
            className={styles.input}
            required
          />
          <label htmlFor='password-confirm' className={styles.label}>
            Confirm password
          </label>
          <input
            type='password'
            name='password-confirm'
            id='password-confirm'
            placeholder='********'
            className={styles.input}
            required
          />
          <button type='submit' className={styles.submit}>
            Sign up
          </button>
          <p className={styles.p}>Already registered?</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
