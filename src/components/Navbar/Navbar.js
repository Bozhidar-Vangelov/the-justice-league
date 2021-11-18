import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Navbar({ toggle }) {
  return (
    <nav
      className='flex justify-between items-center h-16 bg-gray-700 relative shadow-sm font-serif text-gray-300 font-bold'
      role='navigation'
    >
      <Link to='/' className='pl-8'>
        <img src={logo} alt='Logo' />
      </Link>
      <div className='px-4 cursor-pointer xl:hidden' onClick={toggle}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
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
  );
}

export default Navbar;
