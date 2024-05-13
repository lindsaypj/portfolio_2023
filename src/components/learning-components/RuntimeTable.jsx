import React from 'react';

import '../../styles/RuntimeTable.css';

export default function RuntimeTable({ methods }) {

  const getTableRows = () => methods.map((method) => (
    <tr key={method.name}>
      <td>{method.name}</td>
      <td>{method.runtime}</td>
    </tr>
  ))

  return(
    <table className='runtime-table'>
      <thead>
        <tr>
          <th>Method</th>
          <th>Runtime</th>
        </tr>
      </thead>
      
      <tbody>
        {getTableRows()}
      </tbody>
    </table>
  );
}