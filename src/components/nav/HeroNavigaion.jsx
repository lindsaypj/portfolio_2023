import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import '../../styles/HeroNavigation.css';

window.addEventListener('load', () => {})

export default function HeroNavigation({ navLinks, navLinkCallback }) {
  return (
    <Row className='hero-nav text-center'>
      {navLinks.map((link) => (
        <Col
          className='hero-nav-col'
          xs={6} md={4} lg={6} xl={4} xxl={4}
          key={link.text}
        >
          <Card
            as={'a'}
            className='nav-card text-white bg-black shadow border-0 overflow-hidden ratio-1x1'
            onClick={() => {navLinkCallback(link.text)}}
          >
            <img src={link.img} alt={link.imgAlt} className='hero-nav-img' />
            <Card.Title className='py-2 m-0 fs-md-4 bg-black'>{link.text}</Card.Title>
          </Card>
        </Col>
      ))}
    </Row>
  )
}