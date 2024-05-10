import React, { useCallback, useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypingText from '../components/TypingText';
import SudokuGame from './SudokuGame';

export default function Games({ currentRoute, headingTypedCallback, shouldScroll, setShouldScrollToRoute }) {

  ////    INITIALIZATION    ////

  const SudokuRef = useRef();


  ////    STATE MANAGMENT    ////

  const scrollToContent = useCallback(() => {
    let scrollDistance;
    switch(currentRoute) {
      case '/games/sudoku':
        scrollDistance = SudokuRef.current.getBoundingClientRect().top + window.scrollY;
        break;
      default:
        scrollDistance = 0;
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


  ////    RENDERING    ////

  return (
    <Container fluid className='learning-container'>

      {/* Header */}
      <Row>
        <Col xs={12} className='p-0'>
          <h1 className='route-header padding-margins bg-black'>
            <TypingText text='/games' doneTypingCallback={headingTypedCallback} />
          </h1>
        </Col>
      </Row>
      <Row ref={SudokuRef}>
        <SudokuGame />
      </Row>
    </Container>
  );
}