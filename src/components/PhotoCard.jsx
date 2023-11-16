import React from "react";

import '../styles/PhotoCard.css';

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PhotoCard({ image, modalCallback }) {

  const onClickImage = (event) => {
    modalCallback(image);
  };

  return (
    <div className='photo-container' onClick={onClickImage}>
      <LazyLoadImage
        src={image.src}
        placeholderSrc={image.placeholder}
        alt={image.alt}
        className='photo-card'
      />
    </div>
  );
}