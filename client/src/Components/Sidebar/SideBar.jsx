import React from 'react';
import { sideBarData } from './SidebarData';
import SidebarProfile from './SidebarProfile';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useState } from 'react';

const SideBar = ({ activeTab, setActiveTab }) => {
  const [showSubMenu, setshowSubMenu] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className='h-screen bg-side-bar-color flex flex-col'>
        <div className='side_bar_profile'>
          <SidebarProfile />
        </div>
        <div className='nav_menu_items mt-8'>
          <ul>
            {sideBarData &&
              sideBarData.map((elem) => {
                return (
                  <React.Fragment key={elem.id}>
                    <li
                      className={`text-left  py-2 cursor-pointer ${
                        activeTab == elem.route
                          ? 'active: bg-bg-light-blue'
                          : ''
                      }`}
                      key={elem.id}
                      onClick={() => handleTabClick(elem.route)}
                    >
                      <span className='mr-2 mx-7'>{elem.icon} </span>
                      <span className='text-black text-lg mx-7'>
                        {elem.title}
                      </span>
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
                      <ul className='block'>
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
                  </React.Fragment>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
