import React, { useCallback, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';

import '../styles/Photography.css'

import PhotoCard from '../components/PhotoCard';

import MothImg from '../resources/images/Photogrophy/moth.webp';
import MothImgPlaceholder from '../resources/images/Photogrophy/placeholders/moth.webp';
import SkylineImg from '../resources/images/Photogrophy/high-contrast-skyline.webp';
import SkylineImgPlaceholder from '../resources/images/Photogrophy/placeholders/high-contrast-skyline.webp';
import DandelionImg from '../resources/images/Photogrophy/dandelion.webp';
import DandelionImgPlaceholder from '../resources/images/Photogrophy/placeholders/dandelion.webp';
import OceanSkyImg from '../resources/images/Photogrophy/high-contrast-ocean-sky.webp';
import OceanSkyImgPlaceholder from '../resources/images/Photogrophy/placeholders/high-contrast-ocean-sky.webp';
import CandleImg from '../resources/images/Photogrophy/candle-vingette.webp';
import CandleImgPlaceholder from '../resources/images/Photogrophy/placeholders/candle-vingette.webp';
import FenceImg from '../resources/images/Photogrophy/white-fence.webp';
import FenceImgPlaceholder from '../resources/images/Photogrophy/placeholders/white-fence.webp';
import TreeImg from '../resources/images/Photogrophy/organic-tree-corrected.webp';
import TreeImgPlaceholder from '../resources/images/Photogrophy/placeholders/organic-tree-corrected.webp';
import LeafImg from '../resources/images/Photogrophy/leaf.webp';
import LeafImgPlaceholder from '../resources/images/Photogrophy/placeholders/leaf.webp';

const images = [
  {
    src: MothImg, placeholder: MothImgPlaceholder,
    alt: 'Black and white moth on a textured wall.'
  },
  {
    src: DandelionImg, placeholder: DandelionImgPlaceholder,
    alt: 'Black and white dandelion surrouded by grass and weeds.'
  },
  {
    src: TreeImg, placeholder: TreeImgPlaceholder,
    alt: 'Black and white tree trunks growing out over water.'
  },
  {
    src: SkylineImg, placeholder: SkylineImgPlaceholder,
    alt: 'Black and white sunset contrasting the dark silhoette of trees and horizon against the bright sky and the reflection on a body of water'
  },
  {
    src: CandleImg, placeholder: CandleImgPlaceholder,
    alt: 'Black and white candle surrouded by a circle of melted wax with the light fading to black as you move away.'
  },
  {
    src: OceanSkyImg, placeholder: OceanSkyImgPlaceholder,
    alt: 'Black and white sunset at the beach. The sand is black, contrasting with the bright sky and complemented by dark cloud puffs.'
  },
  {
    src: FenceImg, placeholder: FenceImgPlaceholder,
    alt: 'Rustic white fence under a big tree with half its leaves on the ground. In black and white.'
  },
  {
    src: LeafImg, placeholder: LeafImgPlaceholder,
    alt: 'Dark leaf seamingly floating in a moody sky with light shining through its veins.'
  }
];

export default function Photography({ scrollRef }) {

  const [showPreview, setShowPreview] = useState(false);
  const [previewImg, setPreviewImg] = useState(images[0]);
  const [previewZoomed, setPreviewZoomed] = useState(false);

  const modalCallback = (image) => {
    setPreviewImg(image);
    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setPreviewZoomed(false);
  };

  const getPreviewCursor = useCallback(() => {
    if (previewZoomed) {
      return ' cursor-zoom-out'
    }
    return ' cursor-zoom-in zoomed-out';
  }, [previewZoomed]);

  return (
    <Row className='bg-gradient-down pb-10' ref={scrollRef}>
      <Col className='p-0'>
        <h1 className='route-header padding-margins mt-4'>/photography</h1>

        {/* Mobile */}
        <Row className='portfolio__row padding-margins pb-4 photography d-flex d-md-none'>
          <Col className='py-4 px-0 col-12'>
            <PhotoCard image={images[0]} modalCallback={modalCallback} />
            <PhotoCard image={images[1]} modalCallback={modalCallback} />
            <PhotoCard image={images[2]} modalCallback={modalCallback} />
            <PhotoCard image={images[3]} modalCallback={modalCallback} />
            <PhotoCard image={images[4]} modalCallback={modalCallback} />
            <PhotoCard image={images[5]} modalCallback={modalCallback} />
            <PhotoCard image={images[6]} modalCallback={modalCallback} />
            <PhotoCard image={images[7]} modalCallback={modalCallback} />
          </Col>
        </Row>

        {/* Tablet */}
        <Row className='portfolio__row padding-margins pb-4 photography d-none d-md-flex d-xl-none'>
          <Col className='py-4 px-0 col-6'>
            <PhotoCard image={images[0]} modalCallback={modalCallback} />
            <PhotoCard image={images[1]} modalCallback={modalCallback} />
            <PhotoCard image={images[2]} modalCallback={modalCallback} />
            <PhotoCard image={images[6]} modalCallback={modalCallback} />
          </Col>

          <Col className='py-4 px-0 col-6'>
            <PhotoCard image={images[3]} modalCallback={modalCallback} />
            <PhotoCard image={images[4]} modalCallback={modalCallback} />
            <PhotoCard image={images[5]} modalCallback={modalCallback} />
            <PhotoCard image={images[7]} modalCallback={modalCallback} />
          </Col>
        </Row>

        {/* Desktop */}
        <Row className='portfolio__row padding-margins pb-4 photography d-none d-xl-flex'>
          <Col className='py-4 px-0 col-4'>
            <PhotoCard image={images[0]} modalCallback={modalCallback} />
            <PhotoCard image={images[1]} modalCallback={modalCallback} />
            <PhotoCard image={images[2]} modalCallback={modalCallback} />
          </Col>

          <Col className='py-4 px-0 col-4'>
            <PhotoCard image={images[3]} modalCallback={modalCallback} />
            <PhotoCard image={images[4]} modalCallback={modalCallback} />
            <PhotoCard image={images[5]} modalCallback={modalCallback} />
          </Col>

          <Col className='py-4 px-0 col-4'>
            <PhotoCard image={images[6]} modalCallback={modalCallback} />
            <PhotoCard image={images[7]} modalCallback={modalCallback} />
          </Col>
        </Row>
      </Col>

      {/* Image Previewer */}
      <Modal
        fullscreen
        scrollable={true}
        centered
        className='bg-transparent'
        show={showPreview}
        onHide={closePreview}
      >
        <Modal.Body className='p-0 bg-transparent'>
          <button type='button' className='btn-close shadow' aria-label='Close' onClick={closePreview} />
          <img
            className={'w-100 rounded shadow-lg' + getPreviewCursor()}
            src={previewImg.src}
            alt={previewImg.alt}
            onClick={() => setPreviewZoomed(!previewZoomed)}
          />
        </Modal.Body>
      </Modal>
    </Row>
  )
}