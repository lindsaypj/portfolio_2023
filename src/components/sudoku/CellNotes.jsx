import React from "react";

import '../../styles/CellNotes.css';

export default function CellNotes({ notes = [] }) {
  return (
  <span className='cell-notes-container'>
    {notes.map((value, index) => {
      return (<span className='cell-note' key={index}>{value}</span>);
    })}
  </span>
  )
}