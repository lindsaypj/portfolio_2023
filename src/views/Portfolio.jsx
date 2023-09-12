import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypingText from "../components/TypingText";

import '../styles/Portfolio.css';
import WebDev from "./WebDev";

export default function Portfolio({ headingTypedCallback }) {
  return (
    <Container fluid>
      <Row className="portfolio__header-row">
        <Col className="p-0">
            <h1 className='route-header padding-margins'>
              <TypingText text="/portfolio" doneTypingCallback={headingTypedCallback} />
            </h1>

            <h2 className='text-center'>Hero section for portfolio</h2>
        </Col>
      </Row>

      {/* Web Development */}
      <WebDev />

      {/*  */}
    </Container>
  );
};