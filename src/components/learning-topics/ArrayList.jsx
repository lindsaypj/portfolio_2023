import React from 'react';

import { Container } from 'react-bootstrap';
import RuntimeTable from '../RuntimeTable';

import { ArrayListRuntimes } from '../../resources/text/learning';

export default function ArrayList() {
  return (
    <Container className='p-0 pt-4' fluid>

      {/* ArrayList Content */}
      <div>
        <p>
          List of elements stored as a dynamically resizing array.
        </p>
        <RuntimeTable methods={ArrayListRuntimes} />

        <h4 className='pt-5 mb-3'>Uses</h4>
        <p>Usefull when the number of elements to
          be stored is unknown or changes frequently.</p>
        <p>Prefer traditional Array when size is predictable.</p>
      </div>
    </Container>
  );
}