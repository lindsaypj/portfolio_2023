import React from 'react';
import { Card, FloatingLabel, Form } from 'react-bootstrap';

import { Glossary as Terms } from '../../resources/text/learning';
import '../../styles/Glossary.css';

export default function Glossary() {
  return (
    <> 
    <Form className='glossary-form mb-4' data-bs-theme='dark'>
      <FloatingLabel
        controlId='glossary-term-prefix'
        label='Search term...'
        className='mb-3'
      >
        <Form.Control
          placeholder='Search term...'
          aria-label='Search term'
          aria-describedby='glossary-term-prefix'
        />
      </FloatingLabel>
    </Form>

    <ul className='glossary-list'>
      {(Object.keys(Terms)).map((term) => (
        <li key={term} className='overflow-hidden pb-3'>
          <Term
            key={term}
            term={term}
            definition={Terms[term]}
          />
        </li>
      ))}
    </ul>
    </>
  );
}

const Term = ({ term, definition }) => (
  <Card data-bs-theme='dark'>
    <Card.Body>
      <Card.Title>{term}</Card.Title>
      <Card.Text>{definition}</Card.Text>
    </Card.Body>
  </Card>
);