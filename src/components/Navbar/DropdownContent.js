import navbarStyles from './navbarStyles.js';
import LinkButton from './LinkButton.js';

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

function DropdownContent({ isOpen, toggle, userEmail }) {
  return (
    <div
      className={isOpen ? navbarStyles.dropdownContent : 'hidden'}
      onClick={toggle}
    >
      <LinkButton content='Home' to='/' />
      <LinkButton content='Guild Posts' to='/guild-posts' />
      <LinkButton content='Guild Members' to='/guild-members' />

      {userEmail ? userButtons : guestButtons}
    </div>
  );
}

export default DropdownContent;
