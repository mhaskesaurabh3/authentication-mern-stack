import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { googleLogout } from '@react-oauth/google';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = document.cookie
      .split('; ')
      .find((row) => row.startsWith('isAuthenticated='))
      ?.split('=')[1];

    console.log(isAuthenticated);
    if (!isAuthenticated) {
      navigate('/login');
    }
    const token = localStorage.getItem('token');
    // if (!token) {
    //   navigate('/login');
    // }
  }, []);

  return (
    <div>
      <button onClick={() => googleLogout()}>Logout</button>
    </div>
  );
};

export default Dashboard;
