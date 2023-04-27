import React from 'react';
import BreadCumb from './Breadcumb/BreadCumb';
import ProductDetails from './ProductDetails/ProductDetails';
import UserDetails from './UserDetails/UserDetails';

const ProductView = () => {
  return (
    <div>
      <div className='breadcumb'>
        <BreadCumb />
      </div>
      <div className='product_details ml-6 mt-5 rounded-tl-md	border border-br-light-grey flex w-full justify-start'>
        <div className='w-3/5 text-left border border-br-light-grey'>
          <ProductDetails />
        </div>
        <div className='w-2/5 mt-5'>
          <UserDetails />
        </div>
      </div>
    </div>
  );
};

export default ProductView;
