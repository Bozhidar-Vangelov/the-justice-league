import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import authService from '../../services/authService.js';

function Logout() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    authService.logout(user.accessToken);
    logout();
    navigate('/');
  }, [user.accessToken, logout, navigate]);

  return null;
}

export default Logout;
