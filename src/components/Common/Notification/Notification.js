import { useNotificationContext } from '../../../contexts/NotificationContext.js';
import notificationStyles from './notificationStyles.js';

let type = '';

function Notification() {
  const { notification } = useNotificationContext();

  if (!notification.show) {
    return null;
  }

  if (notification.type === 'success') {
    type = notificationStyles.success;
  } else if (notification.type === 'danger') {
    type = notificationStyles.danger;
  } else if (notification.type === 'info') {
    type = notificationStyles.info;
  } else {
    type = notificationStyles.warning;
  }

  console.log(type);

  return (
    <div className={type} role='alert'>
      {notification.message}
    </div>
  );
}

export default Notification;
