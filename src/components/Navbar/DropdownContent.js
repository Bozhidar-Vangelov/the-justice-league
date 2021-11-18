import LinkButton from './LinkButton.js';

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
      <LinkButton content='Home' to='/home' />
      <LinkButton content='My Account' to='/my-account' />
      <LinkButton content='Create Post' to='/create-post' />
      <LinkButton content='Guild Page' to='/guild-page' />
      <LinkButton content='Guild Experience' to='/guild-experience' />
      <LinkButton content='Login' to='/login' />
      <LinkButton content='Register' to='/register' />
      <LinkButton content='Logout' to='/' />
    </div>
  );
}

export default DropdownContent;
