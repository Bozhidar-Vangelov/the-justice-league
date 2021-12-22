import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/AuthContext.js';

function GuestRoutes() {
  const { user } = useAuthContext();

  return user.email ? <Navigate to='/my-account' /> : <Outlet />;
}

export default GuestRoutes;
