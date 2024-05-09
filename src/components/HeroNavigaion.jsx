import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import '../styles/HeroNavigation.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function HeroNavigation({ navLinks, navLinkCallback }) {
  return (
    <Row className='text-center'>
      {navLinks.map((link) => (
        <Col
          className='hero-nav-col col-xxl-2-4'
          xs={6} lg={4} xl={3}
          key={link.text}
        >
          <Card
            as={'a'}
            className='nav-card mb-4 bg-black bg-opacity-75 text-white shadow border-0 overflow-hidden'
            onClick={() => {navLinkCallback(link.text)}}
          >
            <LazyLoadImage src={link.img} alt={link.imgAlt} className='ratio-1x1' />
            <Card.Title className='my-2 fs-md-4'>{link.text}</Card.Title>
          </Card>
        </Col>
      ))}
    </Row>
  )
}