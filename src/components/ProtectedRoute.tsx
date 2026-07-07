import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const ProtectedRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-farm-green border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Allow access if we're in mock mode (no real user) just for demonstration, 
  // or require real user if backend is connected
  if (!user && import.meta.env.VITE_SUPABASE_URL) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};
