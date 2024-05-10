import React from 'react';
import { Container } from 'react-bootstrap';
import RuntimeTable from '../RuntimeTable';

export default function BinaryTree() {
  return (
    <Container className='p-0 pt-4' fluid>
      <p>
        a tree where each node has a maximum of 2 child nodes.
      </p>
      <RuntimeTable methods={[]} />

      <h4 className='pt-5 mb-3'>Uses</h4>
      <p>
        
      </p>
    </Container>
  );
}