import { createContext, useContext, useState, useCallback } from 'react';

export const NotificationContext = createContext();

export const types = {
  danger: 'danger',
  success: 'success',
  warning: 'warning',
  info: 'info',
};

const initialNotificationState = {
  show: false,
  message: '',
  type: types.danger,
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(initialNotificationState);

  const addNotification = useCallback(
    (message, type = types.danger) => {
      setNotification({ show: true, message, type });

      setTimeout(() => {
        setNotification(initialNotificationState);
      }, 2000);
    },
    [initialNotificationState]
  );

  return (
    <NotificationContext.Provider value={{ notification, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const state = useContext(NotificationContext);

  return state;
};
