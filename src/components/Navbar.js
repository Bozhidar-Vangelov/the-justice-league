import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

function Navbar() {
  return (
    <nav className='flex justify-between items-center h-16 bg-black text-white relative shadow-sm font-mono' role='navigation'>
      <Link to='/' className='pl-8'>
        <img src={logo} alt="Logo" />
      </Link>
      <div className="px-4 cursor-pointer md:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link className='p-4' to='/'>Home</Link>
        <Link className='p-4' to='/my-account'>My Account</Link>
        <Link className='p-4' to='/create-post'>Create Post</Link>
        <Link className='p-4' to='/guild-page'>Guild Page</Link>
        <Link className='p-4' to='/guild-experience'>Guild Experience</Link>
        <Link className='p-4' to='/login'>Login</Link>
        <Link className='p-4' to='/register'>Register</Link>
        <Link className='p-4' to='/'>Logout</Link>
      </div>
    </nav>
  )

}

export default Navbar
