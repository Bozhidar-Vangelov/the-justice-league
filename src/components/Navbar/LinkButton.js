import { Link } from 'react-router-dom';
import navbarStyles from './navbarStyles.js';

function LinkButton({ content, to }) {
  return (
    <Link className={navbarStyles.linkButton} to={to}>
      {content}
    </Link>
  );
}

export default LinkButton;
