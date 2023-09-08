import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypingText from "../components/TypingText";

export default function Portfolio({ handleHeadingTyped }) {
  return (
    <Container>
      <Row>
        <Col>
            <h1 className='route-header padding-margins'>
              <TypingText text="/portfolio" doneTypingCallback={handleHeadingTyped} />
            </h1>
        </Col>
      </Row>
    </Container>
  );
};