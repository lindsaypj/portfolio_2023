import React, { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypingText from '../components/TypingText';
import AccordionNav from '../components/AccordionNav';

import { LEARNING_TOPICS, LEARNING_CONTENT } from '../resources/text/learning';
import '../styles/Learning.css';


export default function Learning({ headingTypedCallback, mobileMode, currentRoute, navChangeCallback, shouldScroll, setShouldScrollToRoute, selectedTopic = '', setSelectedTopic, accordionKey = '', setAccordionKey }) {

  ////    INITIALIZATION    ////
  
  const contentRef = useRef();


  ////    STATE MANAGMENT    ////

  // Teminal route update
  useLayoutEffect(() => {
    let nextTopic = '';
    let nextAccordionKey = '';
    if (currentRoute !== '/learning') {
      nextTopic = currentRoute.slice(9);
      nextAccordionKey = LEARNING_CONTENT[nextTopic].group;
    }
    setSelectedTopic(nextTopic);
    setAccordionKey(nextAccordionKey);
  }, [currentRoute, setAccordionKey, setSelectedTopic]);

  const scrollToContent = useCallback(() => {
    let scrollDistance = 0;
    if (currentRoute !== '/learning') {
      scrollDistance = contentRef.current.getBoundingClientRect().top + window.scrollY;
    }
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
  }, [navChangeCallback, setSelectedTopic]);

  ////    RENDERING    ////

  const getTopicContent = useCallback(() => {
    return React.createElement(LEARNING_CONTENT[selectedTopic].content);
  }, [selectedTopic]);

  const getAccordionKey = useCallback(() => {
    return accordionKey;
  }, [accordionKey]);

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
      <Row className='learning-accordion__row'>
        <Col
          xs={12} md={5} lg={4}
          className='learning-accordion__col p-0 bg-black bg-opacity-75 d-none d-md-inline-block'
        >
          <AccordionNav
            accordionKey={getAccordionKey()}
            setAccordionKey={setAccordionKey}
            topics={LEARNING_TOPICS}
            selectedTopic={selectedTopic}
            handleTopicSelection={handleTopicSelection}
            className={' sticky-top'}
          />
        </Col>
        <Col
          xs={12} md={7} lg={8}
          ref={contentRef}
          className={mobileMode ? 'padding-margins' : 'px-md-4 px-lg-5'}
        >
          <h2 className='learning-header'>{ selectedTopic }</h2>
          { getTopicContent() }
        </Col>
      </Row>
    </Container>
  );
}