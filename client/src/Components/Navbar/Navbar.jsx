import React, { useState } from 'react';
import userPic from '../../assets/user.jpg';
import InoLogo from '../../assets/inno-Logo.svg';
import { Link } from 'react-router-dom';
import SidebarProfile from '../Sidebar/SidebarProfile';

const Navbar = () => {
  const [showDrowdown, setShowDropwdown] = useState(false);

  return (
    <div className='block'>
      <nav className='bg-nav-color w-screen top-0 z-50 border-gray-200 dark:bg-gray-900 h-16 '>
        <div className='max-w-screen-xl flex justify-between flex-wrap items-start w-full  mx-auto p-4'>
          <a href='https://flowbite.com/' className='flex items-center'>
            <img src={InoLogo} className='h-8 mr-3' alt='Innoloft logo' />
          </a>

          {/* Search input box */}

          <div className='relative search-input '>
            <input
              type='search'
              className='bg-purple-white shadow rounded border-0 p-3 w-96 h-9 outline-none'
              placeholder='Enter intrests, keyword, company name, etc.'
            />
            <div className='absolute pin-r pin-t mt-3 mr-4 text-purple-lighter'></div>
          </div>

          {/* User dropdown */}
          <div className='user-profile-dropwdown relative'>
            <button
              onClick={() => setShowDropwdown(!showDrowdown)}
              className='block h-10 w-10 rounded-full overflow-hidden z-10 relative'
            >
              <img
                className='w-full h-full object-cover'
                src={userPic}
                alt='user-pic'
              />
            </button>
            {showDrowdown ? (
              <button
                className='fixed inset-0 h-full w-full bg-transparent cursor-default '
                tabIndex='-1'
                onClick={() => setShowDropwdown(!showDrowdown)}
              ></button>
            ) : null}

            {showDrowdown ? (
              <div className='absolute right-0 bg-white rounded-lg w-48 py-2 shadow-lg text-left'>
                <Link to='/login'>
                  <a className='block px-4 py-2 text-gray-800 hover:bg-nav-color hover:text-white'>
                    Profile
                  </a>
                </Link>
                <a
                  href='#'
                  className='block px-4 py-2 text-gray-800  hover:bg-nav-color hover:text-white'
                >
                  Account settings
                </a>
                <a
                  href='#'
                  className='block px-4 py-2 text-gray-800  hover:bg-nav-color hover:text-white'
                >
                  Sign out
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
