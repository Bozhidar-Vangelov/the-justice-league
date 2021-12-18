import { useNavigate } from 'react-router-dom';

import notFoundStyles from './notFoundStyles.js';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={notFoundStyles.main}>
      <div className={notFoundStyles.box}>
        <span className={notFoundStyles.error}>
          <span>4 0 4</span>
        </span>
        <span className={notFoundStyles.text}>
          Sorry, We couldn't find what you are looking for!
        </span>
        <button onClick={() => navigate(-1)} className={notFoundStyles.button}>
          Go back
        </button>
      </div>
    </div>
  );
}

export default NotFound;
