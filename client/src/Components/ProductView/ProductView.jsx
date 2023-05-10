import React from 'react';
import { useSelector } from 'react-redux';
import OfferDetails from '../OfferDetails/OfferDetails';
import YoutubeEmbed from '../Pages/Video/YoutubeEmbed';
import BreadCumb from './Breadcumb/BreadCumb';
import ProductDetails from './ProductDetails/ProductDetails';
import UserDetails from './UserDetails/UserDetails';

const ProductView = () => {
  const companyData = useSelector(
    (state) => state.products?.productData?.video
  );

  let videoId = null;

  if (companyData) {
    try {
      const searchParams = new URLSearchParams(new URL(companyData).search);
      videoId = searchParams.get('v');
      console.log(searchParams); // Outputs the searchParams object to the console
    } catch (error) {
      console.error(`Failed to parse video URL: ${error}`);
    }
  }

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
        <YoutubeEmbed embedId={videoId} />
      </div>

      <div className='youtube_video_embeded  ml-6 mt-5 rounded-tl-md h-56 bg-white	border border-br-light-grey '>
        <OfferDetails />
      </div>
    </div>
  );
};

export default ProductView;
