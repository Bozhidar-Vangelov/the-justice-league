import { Routes, Route } from 'react-router-dom';

import './App.css';
import { AuthProvider } from './contexts/AuthContext.js';
import { NotificationProvider } from './contexts/NotificationContext.js';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home.js';
import MyAccount from './components/MyAccount/MyAccount.js';
import CreatePost from './components/CreatePost/CreatePost.js';
import GuildPosts from './components/GuildPosts/GuildPosts.js';
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';
import Logout from './components/Logout/Logout.js';
import Footer from './components/Footer/Footer.js';
import NotFound from './components/NotFound/NotFound.js';
import GuildPostDetails from './components/GuildPosts/GuildPostDetails.js';
import Notification from './components/Common/Notification/Notification.js';
import EditPost from './components/Edit.js/EditPost.js';
import UserRoutes from './components/Common/RoutesGuards/UserRoutes.js';
import GuestRoutes from './components/Common/RoutesGuards/GuestRoutes.js';

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Navbar />
        <Notification />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/guild-posts' element={<GuildPosts />} />
          <Route path='/details/:postId' element={<GuildPostDetails />} />
          <Route path='*' element={<NotFound />} />
          <Route element={<GuestRoutes />}>
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Route>
          <Route element={<UserRoutes />}>
            <Route path='/logout' element={<Logout />} />
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/my-account' element={<MyAccount />} />
            <Route path='/edit/:postId' element={<EditPost />} />
          </Route>
        </Routes>
        <Footer />
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
