import React from 'react';
import ProductPic from '../../../assets/product-pic.jpg';
import Badge from '../../../assets/badge-icon.svg';

const ProductDetails = () => {
  return (
    <div className='product_detail'>
      <div className='product_descrition relative'>
        <img
          className='h-4/6 rounded-tl-md	'
          src={ProductPic}
          alt='product_pic'
        />
        <div className='badge_component bg-white  flex absolute top-0'>
          <span className='bg-nav-color w-8 h-8 badge_image_span'>
            <img
              className='w-5 h-5 mx-auto mt-1 rounded-tl-md	rounded-br-md'
              src={Badge}
              alt='badge'
            />
          </span>
          <span className='w-16 ml-2 mt-1 font-semibold'>Patent</span>
        </div>
        <div className='product_title  pl-3 h-44 px-7 bg-white'>
          <h2 className='font-medium mb-2 pt-3'>
            Intelligent Finite Elements in Structural mechanics
          </h2>
          <span className='text-sm'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
