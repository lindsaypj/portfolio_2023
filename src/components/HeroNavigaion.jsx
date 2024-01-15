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
            className='nav-card mb-4 bg-dark text-white shadow'
            onClick={() => {navLinkCallback(link.text)}}
          >
            <LazyLoadImage src={link.img} alt={link.imgAlt} />
            <Card.Title className='my-2 fs-md-4'>{link.text}</Card.Title>
          </Card>
        </Col>
      ))}
    </Row>
  )
}