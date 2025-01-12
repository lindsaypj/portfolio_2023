import React, { useCallback, useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypingText from '../components/TypingText';
import SudokuGame from './SudokuGame';
import MazeGame from '../components/maze/MazeGame';

import '../styles/Games.css';

export default function Games({ currentRoute, shouldScroll, setShouldScrollToRoute }) {

  ////    INITIALIZATION    ////

  const SudokuRef = useRef();
  const MazeRef = useRef();


  ////    STATE MANAGMENT    ////

  const scrollToContent = useCallback(() => {
    let scrollDistance;
    switch(currentRoute) {
      case '/games/sudoku':
        scrollDistance = SudokuRef.current.getBoundingClientRect().top + window.scrollY;
        break;
      case '/games/maze':
        scrollDistance = MazeRef.current.getBoundingClientRect().top + window.scrollY;
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
    <Container fluid className='games-container'>

      {/* Header */}
      <Row>
        <Col xs={12} className='p-0'>
          <h1 className='route-header padding-margins bg-black'>
            <TypingText text='/games' />
          </h1>
        </Col>
      </Row>
      <Row ref={SudokuRef}>
        <SudokuGame />
      </Row>
      <Row ref={MazeRef}>
        <Col xs={12} className='p-0'>
          <MazeGame />
        </Col>
      </Row>
    </Container>
  );
}