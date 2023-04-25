import React from 'react';
import userPic from '../../assets/user.jpg';
import InoLogo from '../../assets/inno-Logo.svg';

const Navbar = () => {
  return (
    <>
      <nav className='bg-nav-color w-screen fixed top-0 z-50 border-gray-200 dark:bg-gray-900'>
        <div className='max-w-screen-xl flex flex-wrap items-center  mx-auto p-4'>
          <a href='https://flowbite.com/' className='flex items-center'>
            <img src={InoLogo} className='h-8 mr-3' alt='Flowbite Logo' />
          </a>
          <div className='flex md:order-2'>
            <button
              type='button'
              data-collapse-toggle='navbar-search'
              aria-controls='navbar-search'
              aria-expanded='false'
              className='md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1'
            >
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='sr-only'>Search</span>
            </button>
            <div className='relative hidden md:block'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='sr-only'>Search icon</span>
              </div>
              <input
                type='text'
                id='search-navbar'
                className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Enter Intrests, keywords, company name, etc.'
              />
            </div>
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-search'
          >
            <div className='relative mt-3 md:hidden'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500'
                  aria-hidden='true'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <input
                type='text'
                id='search-navbar'
                className='block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Search...'
              />
            </div>
          </div>
          {/* User dropwdown -menu  */}
          <button
            id='dropdownUserAvatarButton'
            data-dropdown-toggle='dropdownAvatar'
            className='flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
            type='button'
          >
            <span className='sr-only'>Open user menu</span>
            <img
              className='w-8 h-8 rounded-full'
              src={userPic}
              alt='user photo'
            />
          </button>
          {/* Dropdown menu */}
          <div
            id='dropdownAvatar'
            className='z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'
          >
            <div className='px-4 py-3 text-sm text-gray-900 dark:text-white'>
              <div>Bonnie Green</div>
              <div className='font-medium truncate'>name@flowbite.com</div>
            </div>
            <ul
              className='py-2 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='dropdownUserAvatarButton'
            >
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Earnings
                </a>
              </li>
            </ul>
            <div className='py-2'>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
