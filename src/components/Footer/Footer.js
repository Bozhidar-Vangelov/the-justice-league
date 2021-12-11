import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import footerStyles from './footerStyles.js';

function Footer() {
  return (
    <div className={footerStyles.main}>
      <p>Copyright ©2021 Psychozub</p>
      <div className='m-12 grid grid-cols-3 gap-4'>
        <FontAwesomeIcon icon={faFacebook} className={footerStyles.icon} />
        <FontAwesomeIcon icon={faTwitter} className={footerStyles.icon} />
        <FontAwesomeIcon icon={faLinkedin} className={footerStyles.icon} />
        <FontAwesomeIcon icon={faInstagram} className={footerStyles.icon} />
        <FontAwesomeIcon icon={faYoutube} className={footerStyles.icon} />
        <FontAwesomeIcon icon={faGithub} className={footerStyles.icon} />
      </div>
    </div>
  );
}

export default Footer;
