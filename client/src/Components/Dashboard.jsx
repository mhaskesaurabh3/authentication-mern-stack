import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    document.cookie =
      'isAuthenticated=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;';
  };

  useEffect(() => {
    const isAuthenticated = document.cookie
      .split('; ')
      .find((row) => row.startsWith('isAuthenticated='))
      ?.split('=')[1];

    console.log(isAuthenticated);
    const token = localStorage.getItem('token');
    if (!token && !isAuthenticated) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Dashboard;
