import React from 'react';
import InoLogo from '../../../assets/inno-Logo.svg';
import Location from '../../../assets/inno_location.png';

import SidebarProfile from '../../Sidebar/SidebarProfile';

const UserDetails = () => {
  return (
    <div>
      <div className='user_details ml-5'>
        <h3 className='text-left font-medium'>Offered By</h3>
        <img
          src={InoLogo}
          className='h-8 mr-3 bg-nav-color mt-2'
          alt='Innoloft logo'
        />
        <SidebarProfile />
        <div className='mt-7 flex '>
          <img
            className='w-5 h-5 object-cover'
            src={Location}
            alt='location-icon'
          />
          <span className='text-left text-sm font-light ml-1'>
            Julicher Strabe 72a,
            <br /> 52070 Aachen, Germany
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
