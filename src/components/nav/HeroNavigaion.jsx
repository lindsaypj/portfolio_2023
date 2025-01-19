import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import '../../styles/HeroNavigation.css';

window.addEventListener('load', () => {})

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