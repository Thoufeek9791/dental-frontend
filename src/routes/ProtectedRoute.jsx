import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';

export default function ProtectedRoute({ children, requiredRoles = [] }) {
  const { token, user } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRoles.length > 0 && (!user?.role || !requiredRoles.includes(user.role))) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
