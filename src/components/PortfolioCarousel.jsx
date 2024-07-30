import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { LazyLoadImage } from "react-lazy-load-image-component";

import '../styles/PortfolioCarousel.css';
import { useIsVisible } from '../hooks/useIsVisible';

export default function PortfolioCarousel({ desktopImages = [], mobileImages, showMobile = false }) {

  ////    INITIALIZATION    ////

  const carouselRef = useRef()
  const isVisible = useIsVisible(carouselRef);
  const [caroselInterval, setCaroselInterval] = useState(null);


  ////    STATE MANAGMENT    ////

  useEffect(() => {
    const nextInterval = isVisible ? 4500 : null;
    setCaroselInterval(nextInterval);
  }, [isVisible]);


  ////    RENDERING    ////
  
  const getImages = useCallback(() => {
    if (showMobile) {
      return mobileImages;
    }
    return desktopImages;
  }, [showMobile, desktopImages, mobileImages]);

  return (<>
    <Carousel
      fade
      interval={caroselInterval}
      className='z-0 portfolio-carousel rounded pb-5 p-md-5 fs-0'
      ref={carouselRef}
    >
      {getImages().map((image, index) => (
        <Carousel.Item key={index} className={'d-flex' + image.ratio ? ' '+image.ratio : ''}>
          <LazyLoadImage
            src={image.src}
            placeholderSrc={image.placeholder}
            alt={image.alt}
            className='d-block shadow w-100 rounded'
            threshold={1000}
          />
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
}