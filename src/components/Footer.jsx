import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import '../styles/Footer.css'


export default function Foorter() {
  return (
    <div className="footer">
    <Container>
      <Row>
        <Col className="px-5 text-sm-center">
          <h4>{'>'} terminal_commands</h4>
        </Col>
      </Row>
      <Row>
        <Col className="px-5">
          <div className="left-center d-flex flex-column">
            <h5>/paths</h5>
            <p>/about_me</p>
            <p>/automotive</p>
            <p>/portfolio</p>
            <p>/sudoku</p>
            <p>/terminal</p>
          </div>
        </Col>
        <Col className="px-5">
          <h5>.methods()</h5>
          <p></p>
        </Col>
        <Col className="px-5">
          <h5>commands</h5>
          <p></p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}