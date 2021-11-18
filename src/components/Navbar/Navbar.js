import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from '../../images/logo.svg';
import DropdownContent from './DropdownContent.js';
import DropdownIcon from './DropdownIcon.js';

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
          <Link
            className='p-3 m-4 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
            to='/'
          >
            Home
          </Link>
          <Link
            className='p-3 m-4 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
            to='/my-account'
          >
            My Account
          </Link>
          <Link
            className='p-3 m-4 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
            to='/create-post'
          >
            Create Post
          </Link>
          <Link
            className='p-3 m-4 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
            to='/guild-page'
          >
            Guild Page
          </Link>
          <Link
            className='p-3 m-4 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
            to='/guild-experience'
          >
            Guild Experience
          </Link>
          <Link
            className='p-3 m-4 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
            to='/login'
          >
            Login
          </Link>
          <Link
            className='p-3 m-4 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
            to='/register'
          >
            Register
          </Link>
          <Link
            className='p-3 m-4 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
            to='/'
          >
            Logout
          </Link>
        </div>
      </nav>
      <DropdownContent toggle={toggle} isOpen={isOpen} />
    </>
  );
}

export default Navbar;
