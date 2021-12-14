import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home.js';
import MyAccount from './components/MyAccount.js';
import CreatePost from './components/CreatePost/CreatePost.js';
import GuildMembers from './components/GuildMembers/GuildMembers.js';
import GuildExperience from './components/GuildExperience.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/my-account' element={<MyAccount />} />
        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/guild-members' element={<GuildMembers />} />
        <Route path='/guild-experience' element={<GuildExperience />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
