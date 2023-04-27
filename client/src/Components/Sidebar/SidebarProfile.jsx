import React from 'react';
import userPic from '../../assets/user.jpg';

const SidebarProfile = () => {
  return (
    <div>
      <div className='flex w-full  mt-9'>
        <img
          className='rounded-full overflow-hidden w-14 h-14 object-cover'
          src={userPic}
          alt='user'
        ></img>
        <div className='flex flex-col justify-start ml-3'>
          <span className='text-black font-semibold text-left block'>
            Saurabh Mhaske
          </span>
          <span className='text-black font-light text-left block'>
            Front end dev
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidebarProfile;
