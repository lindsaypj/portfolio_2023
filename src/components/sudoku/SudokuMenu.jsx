import React from "react";

import '../../styles/SudokuMenu.css';

export default function SudokuMenu({ showMenu, handleReset, handleGenerate }) {
  if (showMenu) {
    return (
    <div className='sudoku-menu'>
      <div className='sudoku-menu-content'>
        <div>
            <p className='sudoku-menu-title'>You win!</p>
            <button
              className='btn btn-light btn-lg m-3'
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className='btn btn-light btn-lg m-3'
              onClick={handleGenerate}
              disabled
            >
              Generate
            </button>
        </div>
      </div>
    </div>
  )
  }
}