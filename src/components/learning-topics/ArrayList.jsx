import React from 'react';
import { Container } from 'react-bootstrap';

import '../../styles/learning-topics/ArrayList.css';
import Brace from '../../resources/images/Brace.webp';

export default function ArrayList() {
  return (
    <Container className='p-0 pt-4' fluid>

      {/* ArrayList Animation */}
      <div className='d-flex'>
        <div className='array-list__cell'>
          <ArrayListCell value={0} />
        </div>
        <div className='array-list__cell'>
          <ArrayListCell value={1} />
        </div>
        <div className='array-list__cell'>
          <ArrayListCell value={2} />
        </div>
        <div className='array-list__cell'>
          <ArrayListCell value={3} />
        </div>
        <div className='array-list__cell'>
          <ArrayListCell value={4} />
        </div>
        <div className='array-list__cell'><span className='array-list__cell-value'></span></div>
        <div className='array-list__cell'><span className='array-list__cell-value'></span></div>
        <div className='array-list__cell'><span className='array-list__cell-value'></span></div>
      </div>
      <div className='array-list__brace75'>
        <img src={Brace} alt='bracket indicating 75% of above ArrayList'></img>
        <p>75%</p>
        <p>25%</p>
      </div>

      {/* ArrayList Content */}
      <div>
        <p>Test</p>
      </div>
    </Container>
  );
}

function ArrayListCell({ value }) {
  return (
    <svg className='array-list__cell-value' viewBox='0 0 100 100' preserveAspectRatio="xMinYMid meet">
      <text x="25" y="80" fontSize="80">{value}</text>
    </svg>
  )
}