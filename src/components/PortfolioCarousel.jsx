import React, { useCallback } from "react";
import { Carousel } from "react-bootstrap";

export default function PortfolioCarousel({ desktopImages = [], mobileImages, showMobile }) {
  const getImages = useCallback(() => {
    if (showMobile) {
      return mobileImages;
    }
    return desktopImages;
  }, [showMobile, desktopImages, mobileImages]);

  return (
    <Carousel fade data-bs-theme='dark'>
      {getImages().map((image) => (
        <Carousel.Item>
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