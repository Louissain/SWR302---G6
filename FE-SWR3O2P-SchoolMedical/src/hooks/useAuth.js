import { useState, useEffect } from 'react';

// Custom hook để quản lý trạng thái authentication
export const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkLoginStatus = () => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const userData = localStorage.getItem('currentUser');
    
    setIsLoggedIn(loggedIn);
    
    if (loggedIn && userData) {
      try {
        setCurrentUser(JSON.parse(userData));
      } catch (error) {
        console.error('Error parsing user data:', error);
        setCurrentUser(null);
        setIsLoggedIn(false);
      }
    } else {
      setCurrentUser(null);
      setIsLoggedIn(false);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    checkLoginStatus();
    
    // Lắng nghe thay đổi từ các tab khác
    window.addEventListener('storage', checkLoginStatus);
    
    // Custom event để lắng nghe logout từ cùng tab
    window.addEventListener('auth-change', checkLoginStatus);
    
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
      window.removeEventListener('auth-change', checkLoginStatus);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setCurrentUser(null);
    
    // Dispatch custom event để thông báo cho các component khác
    window.dispatchEvent(new CustomEvent('auth-change'));
  };

  const login = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setCurrentUser(user);
    
    // Dispatch custom event để thông báo cho các component khác
    window.dispatchEvent(new CustomEvent('auth-change'));
  };

  return {
    isLoggedIn,
    currentUser,
    loading,
    logout,
    login,
    checkLoginStatus
  };
};
