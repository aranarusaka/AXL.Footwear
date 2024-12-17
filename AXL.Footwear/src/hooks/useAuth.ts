import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

export function useAuth() {
  const navigate = useNavigate();
  const { user, isAuthenticated, login, logout } = useAuthStore();

  const handleLogin = async (email: string, password: string) => {
    // In a real app, this would make an API call
    if (email === 'admin@sandalspot.com' && password === 'admin123') {
      login({
        id: 'admin1',
        email,
        name: 'Admin User',
        role: 'admin',
      });
      navigate('/admin/dashboard');
    } else {
      // Simulate regular user login
      login({
        id: '1',
        email,
        name: 'John Doe',
        role: 'user',
      });
      navigate('/catalog');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return {
    user,
    isAuthenticated,
    login: handleLogin,
    logout: handleLogout,
  };
}