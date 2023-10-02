import React, { useCallback } from "react";
import { Carousel } from "react-bootstrap";

export default function PortfolioCarousel({ desktopImages = [], mobileImages, showMobile = false }) {
  const getImages = useCallback(() => {
    if (showMobile) {
      return mobileImages;
    }
    return desktopImages;
  }, [showMobile, desktopImages, mobileImages]);

  return (
    <Carousel fade data-bs-theme='dark' className='shadow z-0'>
      {getImages().map((image, index) => (
        <Carousel.Item key={index}>
          <img
            src={image.src}
            alt={image.alt}
            className='d-block w-100'
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}