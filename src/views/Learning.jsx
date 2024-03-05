import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Accordion, Button, Col, Container, Row } from 'react-bootstrap';
import TypingText from '../components/TypingText';

import { LEARNING_TOPICS, LEARNING_CONTENT } from '../resources/text/learning';

import '../styles/Learning.css';

export default function Learning({ headingTypedCallback, mobileMode, currentRoute, navChangeCallback, shouldScroll, setShouldScrollToRoute }) {

  ////    INITIALIZATION    ////

  let initialTopic = '';
  let initialAccordionKey = '';
  if (currentRoute !== '/learning') {
    initialTopic = currentRoute.slice(9);
    initialAccordionKey = LEARNING_CONTENT[initialTopic].group;
  }

  const [selectedTopic, setSelectedTopic] = useState(initialTopic);
  const [accordionKey, setAccoridonKey] = useState(initialAccordionKey);
  const contentRef = useRef();


  ////    STATE MANAGMENT    ////

  // Teminal route update
  useEffect(() => {
    let nextTopic = '';
    let nextAccordionKey = '';
    if (currentRoute !== '/learning') {
      nextTopic = currentRoute.slice(9);
      nextAccordionKey = LEARNING_CONTENT[nextTopic].group;
    }
    setSelectedTopic(nextTopic);
    setAccoridonKey(nextAccordionKey);
  }, [currentRoute]);

  const scrollToContent = useCallback(() => {
    const scrollDistance = contentRef.current.getBoundingClientRect().top + window.scrollY;
    window.scroll({
      top: scrollDistance,
      behavior: "smooth"
    });
    window.removeEventListener ('load', scrollToContent);
  }, [currentRoute]);

  useEffect(() => {
    if (shouldScroll) {
      setTimeout(scrollToContent, 50);
      setShouldScrollToRoute(false);
    }
  }, [shouldScroll, setShouldScrollToRoute, currentRoute, scrollToContent]);

  const handleTopicSelection = useCallback((topic) => {
    setSelectedTopic(topic);
    const nextRoute = '/learning' + topic;
    navChangeCallback(nextRoute);
  }, [navChangeCallback]);


  ////    RENDERING    ////

  const getTopicContent = useCallback(() => {
    return React.createElement(LEARNING_CONTENT[selectedTopic].content);
  }, [selectedTopic]);

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
          <Accordion
            className='learning-accordion'
            activeKey={accordionKey}
            flush
          >
          {/* Sections */}
          {LEARNING_TOPICS.map(( section ) => (
            <Accordion.Item
              eventKey={section.name}
              key={section.name}
              className='learning-accordion__item'
            >
              <Accordion.Header
                className='learning-accordion__header padding-margins pe-0'
                onClick={() => {setAccoridonKey(section.name)}}
              >
                {section.name}
              </Accordion.Header>

              <Accordion.Body className='p-0'>
                {/* Topics */}
                {section.contents.map((topic) => (
                  <Button
                    key={topic}
                    variant='dark'
                    className={'learning-accordion__topic padding-margins pe-0' + (topic === selectedTopic ? ' selected' : '')}
                    onClick={() => { handleTopicSelection(topic) }}
                  >{topic}</Button>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
          </Accordion>
        </Col>
        <Col ref={contentRef} className='px-3'>
          <h1 className='learning-header'>{ selectedTopic }</h1>
          { getTopicContent() }
        </Col>
      </Row>
    </Container>
  );
}