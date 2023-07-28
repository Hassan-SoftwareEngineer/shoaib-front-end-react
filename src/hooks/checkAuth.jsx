import { useEffect } from 'react';

const useAuth = () => {
  const isAuthenticated = localStorage.getItem('auth');
  const currentLoginData = JSON.parse(localStorage.getItem('currentLoginData'));

  const logoutUser = () => {
    localStorage.clear();
    window.location.href = '/'; // Redirect to the desired location after logout
  };

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000); // Get the current time in seconds

    if (currentLoginData && currentLoginData.exp && currentLoginData.exp < currentTime) {
      localStorage.setItem('auth', false);
      logoutUser();
    }
  }, [currentLoginData]);

  return isAuthenticated;
};

export default useAuth;
