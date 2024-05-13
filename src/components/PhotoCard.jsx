import React from "react";

import '../styles/PhotoCard.css';

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PhotoCard({ image, modalCallback }) {

  const onClickImage = (event) => {
    modalCallback(image);
  };

  const getImageRatio = () => {
    const ratioClass = ' photo-container--' + image.ratio;
    return ratioClass;
  }

  return (
    <div className={'photo-container' + getImageRatio()} onClick={onClickImage}>
      <LazyLoadImage
        src={image.src}
        placeholderSrc={image.placeholder}
        alt={image.alt}
        className='photo-card'
      />
    </div>
  );
}