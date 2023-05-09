import React from 'react';
// import './YoutubeEmbed.css';

const YoutubeEmbed = ({ embedId }) => (
  <div className='video-responsive   '>
    <h2 className='text-left ml-3 mt-3 font-semibold'>Video</h2>
    <div className='youtube_video flex justify-center'>
      <iframe
        className='!w-3/4 mt-5  '
        // width='500px'
        height='300px'
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
      />
    </div>
  </div>
);

export default YoutubeEmbed;
