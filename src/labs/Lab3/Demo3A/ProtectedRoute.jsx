import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './AuthContext';

export function ProtectedRoute({ allowedRoles }) {
  const { user } = useAuth();
  console.log("🚀 ~ ProtectedRoute ~ user:", user)

  if (!user) return <Navigate to="/login" replace />;

  if (!allowedRoles.includes(user.role))
    return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
}
