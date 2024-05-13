import React from 'react';

export default function ReferenceList({ references }) {
  return (
    <ul>
      {references.map(({ prefix, displayText, link }, index) => (
        <li key={'ref'+index}>
          {prefix}:{' '}
          <a
            href={link}
            target='_blank'
            rel='noreferrer'
          >
            {displayText}
          </a>
        </li>
      ))}
    </ul>
  )
}