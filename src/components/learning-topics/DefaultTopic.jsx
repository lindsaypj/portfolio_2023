import React from 'react';
import Glossary from './Glossary';

export default function DefaultTopic() {
  return (
    <>
      <h1>Data Structures and Algorithms</h1>
      <p>Select a topic to learn more about it.</p>
      <p>
        This is not an exhaustive source. Links to additional resources are included.
        Content is based on Java unless specified.
      </p>

      {/* Glossary */}
      <h2 className='mt-5 mb-4'>/glossary</h2>
      <Glossary />
    </>
  );
}