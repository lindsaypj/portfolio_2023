import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypingText from "../components/TypingText";

import '../styles/Portfolio.css';
import WebDev from "./WebDev";
import useWindowWidth from "../hooks/useWindowWidth";
import SoftwareDev from "./SoftwareDev";

const mobileBreakpoint = 768; // Aligns with Bootstrap MD breakpoint

export default function Portfolio({ scrollRef, headingTypedCallback }) {
  const [mobileMode, setMobileMode] = useState(true);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (windowWidth > mobileBreakpoint) setMobileMode(false);
    else setMobileMode(true);
  }, [windowWidth]);

  return (
    <Container fluid className='p-0' ref={scrollRef}>
      <Row className="hero-row">
        <Col className="p-0">
          <h1 className='route-header padding-margins'>
            <TypingText text="/portfolio" doneTypingCallback={headingTypedCallback} />
          </h1>
        </Col>
      </Row>

      {/* Web Development */}
      <WebDev mobileMode={mobileMode} />

      {/* Object oreineted programming */}
      <SoftwareDev />

      {/* Open Source */}

      {/* Automotive */}

      {/* Photography */}
    </Container>
  );
};