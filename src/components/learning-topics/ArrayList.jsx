import React from 'react';

import RuntimeTable from '../RuntimeTable';
import ReferenceList from './ReferenceList';

import { ArrayListRuntimes, ArrayListReferences } from '../../resources/text/learning';

export default function ArrayList() {
  return (
    <>
      {/* Topic Description */}
      <p>List of elements stored as a dynamically resizing array.</p>
      
      <RuntimeTable methods={ArrayListRuntimes} />

      <h4 className='learning-h4'>Uses</h4>
      <p>
        Usefull when the number of elements to
        be stored is unknown or changes frequently.
      </p>
      <p>Prefer traditional Array when size is predictable.</p>

      <h4 className='learning-h4'>References</h4>
      <ReferenceList references={ArrayListReferences} />
    </>
  );
}