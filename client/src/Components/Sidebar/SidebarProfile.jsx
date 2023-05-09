import React from 'react';
import { useSelector } from 'react-redux';
import userPic from '../../assets/user.jpg';

const SidebarProfile = () => {
  const profileData = useSelector((state) => state.products?.productData?.user);

  return (
    <div>
      <div className='flex w-full  mt-9'>
        <img
          className='rounded-full overflow-hidden w-14 h-14 object-cover'
          src={profileData?.profilePicture}
          alt='user'
        ></img>
        <div className='flex flex-col justify-start ml-3'>
          <span className='text-black font-semibold text-left block'>
            {profileData?.firstName} {profileData?.lastName}
          </span>
          <span className='text-black font-light text-left block'>
            {profileData?.position}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
