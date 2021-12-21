import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '../../contexts/AuthContext';
import authService from '../../services/authService.js';
import {
  useNotificationContext,
  types,
} from '../../contexts/NotificationContext.js';

function Logout() {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const { addNotification } = useNotificationContext();

  useEffect(() => {
    authService.logout(user.accessToken);
    logout();
    addNotification('Successfully logged out!', types.success);
    navigate('/');
  }, [user.accessToken, logout, addNotification, navigate]);

  return null;
}

export default Logout;
