import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';

import navbarStyles from './navbarStyles.js';
import logo from '../../images/logo.svg';
import DropdownContent from './DropdownContent.js';
import DropdownIcon from './DropdownIcon.js';
import LinkButton from './LinkButton.js';
import { AuthContext } from '../../contexts/AuthContext.js';

function Navbar() {
  const { user } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  const userButtons = (
    <>
      <LinkButton content='Create Post' to='/create-post' />
      <LinkButton content='My Account' to='/my-account' />
      <LinkButton content='Logout' to='/logout' />
    </>
  );

  const guestButtons = (
    <>
      <LinkButton content='Register' to='/register' />
      <LinkButton content='Login' to='/login' />
    </>
  );

  return (
    <>
      <nav className={navbarStyles.nav} role='navigation'>
        <Link to='/' className='pl-8'>
          <img src={logo} alt='Logo' />
        </Link>
        <DropdownIcon toggle={toggle} />
        <div className='pr-8 xl:block hidden'>
          <LinkButton content='Home' to='/' />
          <LinkButton content='Guild Posts' to='/guild-posts' />
          <LinkButton content='Guild Members' to='/guild-members' />
          {user.email ? userButtons : guestButtons}
        </div>
      </nav>
      <DropdownContent toggle={toggle} isOpen={isOpen} userEmail={user.email} />
    </>
  );
}

export default Navbar;
