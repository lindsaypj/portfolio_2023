import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TypingText from '../components/TypingText';
import SudokuGame from './SudokuGame';

export default function Games({ headingTypedCallback }) {
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
      <Row className=''>
        <h1 className='padding-margins route-header'>/sudoku</h1>
        <SudokuGame />
      </Row>
    </Container>
  );
}