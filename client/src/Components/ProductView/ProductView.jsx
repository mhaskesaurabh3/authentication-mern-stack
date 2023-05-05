import React from 'react';
import YoutubeEmbed from '../Pages/Video/YoutubeEmbed';
import BreadCumb from './Breadcumb/BreadCumb';
import ProductDetails from './ProductDetails/ProductDetails';
import UserDetails from './UserDetails/UserDetails';

const ProductView = () => {
  return (
    <div>
      <div className='breadcumb'>
        <BreadCumb />
      </div>
      <div className='product_details ml-6 mt-5 rounded-tl-md	border border-br-light-grey flex  justify-start'>
        <div className='w-3/5 text-left border border-br-light-grey'>
          <ProductDetails />
        </div>
        <div className='w-2/5 mt-5'>
          <UserDetails />
        </div>
      </div>

      <div className='youtube_video_embeded  ml-6 mt-5 rounded-tl-md h-96 bg-white	border border-br-light-grey '>
        <YoutubeEmbed embedId={'dQw4w9WgXcQ'} />
      </div>
    </div>
  );
};

export default ProductView;
