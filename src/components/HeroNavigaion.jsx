import React from "react";
import { Card, CardImg, Col, Row } from "react-bootstrap";

import '../styles/HeroNavigation.css';

export default function HeroNavigation({ navLinks, navLinkCallback }) {
  return (
    <Row className='text-center'>
      {navLinks.map((link) => (
        <Col
          className='hero-nav-col'
          xs={6} lg={4} xl={3}
          key={link.text}
        >
          <Card
            as={'a'}
            className='nav-card mb-4 bg-dark text-white shadow'
            onClick={() => {navLinkCallback(link.text)}}
          >
            <CardImg src={link.img} />
            <Card.Title className='my-2'>{link.text}</Card.Title>
          </Card>
        </Col>
      ))}
    </Row>
  )
}