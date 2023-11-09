import React from "react";

import '../styles/PhotoCard.css';

export default function PhotoCard({ image, modalCallback }) {

  const onClickImage = (event) => {
    modalCallback(image);
  };

  return (
    <div className='photo-container' onClick={onClickImage}>
      <img src={image.src} className='photo-card' alt={image.alt} />
    </div>
  );
}