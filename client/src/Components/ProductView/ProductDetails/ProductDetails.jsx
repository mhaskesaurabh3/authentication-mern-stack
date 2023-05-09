import React from 'react';
import ProductPic from '../../../assets/product-pic.jpg';
import Badge from '../../../assets/badge-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/ProductSlice/ProductSlice';
import { useEffect } from 'react';

const ProductDetails = () => {
  const prodData = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className='product_detail'>
      <div className='product_descrition relative'>
        <img
          className='h-52 w-2/3 rounded-tl-md	object-contain'
          src={prodData?.productData?.picture}
          alt='product_pic'
        />
        <div className='badge_component bg-white  flex absolute top-0'>
          <span className='bg-nav-color w-8 h-8 badge_image_span'>
            <img
              className='w-5 h-5 mx-auto mt-1 rounded-tl-md	rounded-br-md '
              src={Badge}
              alt='badge'
            />
          </span>
          <span className='w-16 ml-2 mt-1 font-semibold'>Patent</span>
        </div>
        <div className='product_title  pl-3 h-48 px-7 bg-white'>
          <h2 className='font-semibold mb-2 pt-3'>
            {prodData?.productData?.name}
          </h2>
          <span className='text-sm'>
            {prodData?.productData?.description?.slice(0, 392)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
