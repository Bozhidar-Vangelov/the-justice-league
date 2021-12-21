import { createContext, useCallback, useState } from 'react';

const NotificationContext = createContext();

const types = {
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
};

function NotificationProvider({ children }) {
  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: types.error,
  });

  const addNotification = useCallback((message, type) => {
    setNotification({ show: true, message, type });
  });

  return (
    <NotificationContext.Provider value={{ notification, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export default NotificationProvider;
