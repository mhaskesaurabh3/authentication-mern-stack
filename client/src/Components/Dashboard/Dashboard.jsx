import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Pages/Home/Home';
import Members from '../Pages/Members/Members';
import SideBar from '../Sidebar/SideBar';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'members':
        return <Members />;
      default:
        return null;
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
      <div className='innoloft-navbar'>
        <Navbar />
      </div>
      <div className='home w-full flex'>
        <div className='side_bar w-1/5'>
          <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className='data_display_area w-4/5 absolute'>
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
