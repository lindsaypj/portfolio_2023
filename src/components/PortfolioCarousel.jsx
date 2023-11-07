import React, { useCallback } from 'react';
import { Carousel } from 'react-bootstrap';

import '../styles/PortfolioCarousel.css';

export default function PortfolioCarousel({ desktopImages = [], mobileImages, showMobile = false }) {
  const getImages = useCallback(() => {
    if (showMobile) {
      return mobileImages;
    }
    return desktopImages;
  }, [showMobile, desktopImages, mobileImages]);

  return (<>
    <Carousel fade className='z-0 portfolio-carousel rounded pb-5 p-md-5'>
      {getImages().map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image.src}
            alt={image.alt}
            className='d-block shadow w-100 rounded'
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
}