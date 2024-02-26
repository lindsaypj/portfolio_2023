import React from "react";
import { Accordion, Button, Col, Container, Row } from "react-bootstrap";
import TypingText from "../components/TypingText";
import LEARNING_TOPICS from '../resources/text/learning';

import '../styles/Learning.css';

export default function Learning({ headingTypedCallback, mobileMode }) {
  return (
    <Container fluid className='learning-container'>

      {/* Header */}
      <Row>
        <Col xs={12} className='p-0'>
          <h1 className='route-header padding-margins bg-black'>
            <TypingText text="/learning" doneTypingCallback={headingTypedCallback} />
          </h1>
        </Col>
      </Row>

      {/* Accordian Navigation */}
      <Row className='accordion-row'>
        <Col xs={12} md={5} lg={4} className='accordion-col p-0 bg-black bg-opacity-75'>
          <Accordion className='learning-accordion' flush alwaysOpen>
          {/* Sections */}
          {LEARNING_TOPICS.map((section) => (
            <Accordion.Item
              eventKey={section.name}
              key={section.name}
              className='learning-accordion__item'
            >
              <Accordion.Header className='learning-accordion__header padding-margins pe-0'>{section.name}</Accordion.Header>

              <Accordion.Body className='p-0'>
                {/* Topics */}
                {section.contents.map((topic) => (
                  <Button
                    key={topic}
                    variant='dark'
                    className='learning-accordion__topic padding-margins pe-0'
                  >{topic}</Button>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
          </Accordion>
        </Col>
        <Col>
        
        </Col>
      </Row>
    </Container>
  );
}