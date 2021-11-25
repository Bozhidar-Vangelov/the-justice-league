import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='p-12 flex justify-center items-center h-16 bg-gray-700 text-white'>
      <p>Copyright ©2021 Psychozub</p>
      <div className='m-12 grid grid-cols-3 gap-4'>
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedin} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  );
}

export default Footer;
