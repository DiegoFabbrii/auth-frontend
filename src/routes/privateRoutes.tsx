import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/authContext';

export function PrivateRoutes() {
  const authContext = AuthContext;
  const { signed } = useContext(authContext);

  return signed ? <Outlet /> : <Navigate to="/" />;
}
