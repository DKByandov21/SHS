import BannerVideo from '../assets/banner-video.mp4'
import React from 'react';

function MyVideoComponent() {

  return (
    <>
      <div className='content-banner'>
        <video width={"1920px"} muted loop autoPlay>
          <source src={BannerVideo} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default MyVideoComponent;