import React from 'react';
import BreadCumb from './Breadcumb/BreadCumb';

const ProductView = () => {
  return (
    <div>
      <div className='breadcumb'>
        <BreadCumb />
      </div>
      <div className='product_details flex w-full justify-start'>
        <div className='w-3/4 text-left ml-6 mt-5'>
          This is product details section
        </div>
        <div className='w-3/12 mt-5'>user and office address section</div>
      </div>
    </div>
  );
};

export default ProductView;
