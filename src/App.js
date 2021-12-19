import { Routes, Route } from 'react-router-dom';

import './App.css';
import { AuthProvider } from './contexts/AuthContext.js';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home.js';
import MyAccount from './components/MyAccount/MyAccount.js';
import CreatePost from './components/CreatePost/CreatePost.js';
import GuildMembers from './components/GuildMembers/GuildMembers.js';
import GuildPosts from './components/GuildPosts/GuildPosts.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Logout from './components/Logout/Logout.js';
import Footer from './components/Footer/Footer.js';
import NotFound from './components/NotFound/NotFound.js';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/guild-members' element={<GuildMembers />} />
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/guild-posts' element={<GuildPosts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
