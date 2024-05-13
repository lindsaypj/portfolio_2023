import React, { useState } from 'react';
import { Card, FloatingLabel, Form } from 'react-bootstrap';

import SearchTree from '../../objects/SearchTree';

import { Glossary as searchTerms } from '../../resources/text/learning';
import '../../styles/Glossary.css';


export default function Glossary() {
  const GlossarySearchTree = new SearchTree(searchTerms);

  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState(new Set());
  
  const handleSearch = (event) => {
    const nextValue = event.target.value;
    setSearchValue(nextValue);

    const nextSearchResults = GlossarySearchTree.getTerms(nextValue);
    setSearchResults(nextSearchResults);
  }

  return (
    <> 
    <Form className='glossary-form mb-4' data-bs-theme='dark'>
      <FloatingLabel
        controlId='glossary-term-prefix'
        label='Search...'
        className='mb-3'
      >
        <Form.Control
          placeholder='Search...'
          aria-label='Search term'
          aria-describedby='glossary-term-prefix'
          value={searchValue}
          onChange={handleSearch}
        />
      </FloatingLabel>
    </Form>

    <ul className='glossary-list'>
      {(Object.keys(searchTerms))
        .filter((term) => {
          return searchValue === '' || searchResults.has(term.toLowerCase());
        })
        .map((term) => (
        <li key={term} className='overflow-hidden mb-3'>
          <Term
            key={term}
            term={term}
            definition={searchTerms[term]}
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