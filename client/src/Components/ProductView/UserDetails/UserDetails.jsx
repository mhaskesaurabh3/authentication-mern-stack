import React from 'react';
import { useSelector } from 'react-redux';
import InoLogo from '../../../assets/inno-Logo.svg';
import Location from '../../../assets/inno_location.png';
import SidebarProfile from '../../Sidebar/SidebarProfile';
import UserLocation from '../Location/UserLocation';

const UserDetails = () => {
  const companyInfo = useSelector(
    (state) => state.products?.productData?.company
  );

  const fullLocation = companyInfo?.street + ' ' + companyInfo?.house;

  return (
    <div>
      <div className='user_details ml-5'>
        <h3 className='text-left font-medium'>Offered By</h3>
        <img
          src={companyInfo?.logo}
          className='h-8 mr-3 mt-2'
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
        <div className='office_location mb-2 mt-2'>
          <UserLocation />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
