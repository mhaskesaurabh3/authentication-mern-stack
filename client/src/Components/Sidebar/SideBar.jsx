import React from 'react';
import { sideBarData } from './SidebarData';
import SidebarProfile from './SidebarProfile';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useState } from 'react';

const SideBar = () => {
  const [showSubMenu, setshowSubMenu] = useState(false);
  return (
    <div>
      <div className='h-screen bg-slate-500 flex flex-col'>
        <div className='side_bar_profile'>
          <SidebarProfile />
        </div>
        <div className='nav_menu_items mt-8'>
          <ul>
            {sideBarData &&
              sideBarData.map((elem) => {
                return (
                  <>
                    <li
                      className='text-left mx-7 py-2 cursor-pointer'
                      key={elem.id}
                    >
                      <span className='mr-2'>{elem.icon} </span>
                      <span className='text-black text-lg'>{elem.title}</span>
                      {elem?.submenu && (
                        <button
                          className='bg-transparent'
                          onClick={() => setshowSubMenu(!showSubMenu)}
                        >
                          <ArrowDropDownOutlinedIcon
                            className={`${
                              showSubMenu ? 'rotate-180' : 'rotate-0'
                            }`}
                          />
                        </button>
                      )}
                    </li>

                    {elem.submenu && (
                      <ul className='absolute'>
                        {elem.subMenuItems.map((item) => {
                          return (
                            <>
                              {showSubMenu ? (
                                <li
                                  className='text-left mx-7 cursor-pointer'
                                  key={item.id}
                                >
                                  <span>{item.icon}</span>
                                  <span className='text-black'>
                                    {item.title}
                                  </span>
                                </li>
                              ) : null}
                            </>
                          );
                        })}
                      </ul>
                    )}
                  </>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
