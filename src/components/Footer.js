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
    <div className='text-2xl text-gray-300 p-12 flex justify-center items-center h-16 bg-gray-700 text-white'>
      <p>Copyright ©2021 Psychozub</p>
      <div className='m-12 grid grid-cols-3 gap-4'>
        <FontAwesomeIcon
          icon={faFacebook}
          className='hover:text-gray-900 cursor-pointer'
        />
        <FontAwesomeIcon
          icon={faTwitter}
          className='hover:text-gray-900 cursor-pointer'
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className='hover:text-gray-900 cursor-pointer'
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className='hover:text-gray-900 cursor-pointer'
        />
        <FontAwesomeIcon
          icon={faYoutube}
          className='hover:text-gray-900 cursor-pointer'
        />
        <FontAwesomeIcon
          icon={faGithub}
          className='hover:text-gray-900 cursor-pointer'
        />
      </div>
    </div>
  );
}

export default Footer;
