import { Link } from 'react-router-dom';

function DropdownContent({ isOpen, toggle }) {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-gray-700 shadow-sm text-gray-300'
          : 'hidden'
      }
      onClick={toggle}
    >
      <Link
        className='p-3 p-3 m-1 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
        to='/'
      >
        Home
      </Link>
      <Link
        className='p-3 p-3 m-1 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
        to='/my-account'
      >
        My Account
      </Link>
      <Link
        className='p-3 p-3 m-1 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
        to='/create-post'
      >
        Create Post
      </Link>
      <Link
        className='p-3 p-3 m-1 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
        to='/guild-page'
      >
        Guild Page
      </Link>
      <Link
        className='p-3 p-3 m-1 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
        to='/guild-experience'
      >
        Guild Experience
      </Link>
      <Link
        className='p-3 p-3 m-1 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
        to='/login'
      >
        Login
      </Link>
      <Link
        className='p-3 p-3 m-1 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
        to='/register'
      >
        Register
      </Link>
      <Link
        className='p-3 p-3 m-1 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
        to='/'
      >
        Logout
      </Link>
    </div>
  );
}

export default DropdownContent;
