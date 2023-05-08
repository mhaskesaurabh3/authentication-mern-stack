import React from 'react';
import TechLogo from '../../assets/inno_tech.svg';

const OfferDetails = () => {
  return (
    <div>
      <h2 className='text-left ml-3 mt-3 font-semibold'>Offer details</h2>
      <div className='tech_badges mt-6 ml-3'>
        <div className='tech_badge'>
          <img className='inline-block' src={TechLogo} alt='Techlogo' />
          <span className='font-light text-new-grey text-left'>Technology</span>
        </div>
        <div>
          <span class='bg-gray-100 text-new-grey font-medium mt-3 text-sm mr-2 px-7 py-2 rounded-full dark:bg-gray-700 dark:text-gray-300'>
            Label 1
          </span>
          <span class='bg-gray-100 text-new-grey font-medium mt-3 text-sm mr-2 px-7 py-2 rounded-full dark:bg-gray-700 dark:text-gray-300'>
            Label 1
          </span>
          <span class='bg-gray-100 text-new-grey font-medium mt-3 text-sm mr-2 px-7 py-2 rounded-full dark:bg-gray-700 dark:text-gray-300'>
            Label 1
          </span>
        </div>
      </div>
    </div>
  );
};

export default OfferDetails;
