import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home.js';
import MyAccount from './components/MyAccount/MyAccount.js';
import CreatePost from './components/CreatePost/CreatePost.js';
import GuildMembers from './components/GuildMembers/GuildMembers.js';
import GuildPosts from './components/GuildPosts/GuildPosts.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Footer from './components/Footer/Footer.js';
import useLocalStorage from './hooks/useLocalStorage.js';
import { AuthContext } from './contexts/AuthContext.js';

const initialAuthState = {
  _id: '',
  email: '',
  accessToken: '',
};

function App() {
  const [user, setUser] = useLocalStorage('user', initialAuthState);

  const login = (authData) => {
    setUser(authData);

    // console.log(user);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/guild-members' element={<GuildMembers />} />
        <Route path='/guild-posts' element={<GuildPosts />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </AuthContext.Provider>
  );
}

export default App;
