import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import DropdownContent from './DropdownContent.js';
import DropdownIcon from './DropdownIcon.js';
import LinkButton from './LinkButton.js';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log(isOpen);
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

  return (
    <>
      <nav
        className='flex justify-between items-center h-16 bg-gray-700 relative shadow-sm font-serif text-gray-300 font-bold'
        role='navigation'
      >
        <Link to='/' className='pl-8'>
          <img src={logo} alt='Logo' />
        </Link>
        <DropdownIcon toggle={toggle} />
        <div className='pr-8 xl:block hidden'>
          <LinkButton content='Home' to='/home' />
          <LinkButton content='My Account' to='/my-account' />
          <LinkButton content='Create Post' to='/create-post' />
          <LinkButton content='Guild Page' to='/guild-page' />
          <LinkButton content='Guild Experience' to='/guild-experience' />
          <LinkButton content='Login' to='/login' />
          <LinkButton content='Register' to='/register' />
          <LinkButton content='Logout' to='/' />
        </div>
      </nav>
      <DropdownContent toggle={toggle} isOpen={isOpen} />
    </>
  );
}

export default Navbar;
