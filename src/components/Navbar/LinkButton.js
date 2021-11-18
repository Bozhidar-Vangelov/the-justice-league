import { Link } from 'react-router-dom';

function LinkButton({ content, to }) {
  return (
    <Link
      className='p-3 m-4 bg-gray-600 hover:bg-gray-800 hover:text-gray-400 rounded-lg shadow-lg'
      to={to}
    >
      {content}
    </Link>
  );
}

export default LinkButton;
