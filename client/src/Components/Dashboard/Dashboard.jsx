import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    let isAuthExpire = (document.cookie =
      'isAuthenticated=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;');
    let authTokenExpire = (document.cookie =
      'authToken=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;');
    if (isAuthExpire && authTokenExpire) {
      alert('Logout successful');
      navigate('/login');
    }
  };

  useEffect(() => {
    const isAuthenticated = document.cookie
      .split('; ')
      .find((row) => row.startsWith('isAuthenticated='))
      ?.split('=')[1];
    const authToken = document.cookie
      .split('; ')
      .find((row) => row.startsWith('authToken='))
      ?.split('=')[1];

    console.log(isAuthenticated);

    if (!isAuthenticated && !authToken) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      <Navbar />
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};

export default Dashboard;
