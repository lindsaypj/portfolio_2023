import React from "react";
import ShowNumBtn from "./ShowNumBtn";
import HideNumBtn from "./HideNumBtn";

import '../../styles/testconfigurator.css';


function TestConfigurator({ boardSize, setBoardSize, hideNums, setHideNums, showConflicts, setShowConflicts }) {
  return (
    <div className="configurator-container mb-5">
      {/* HIDE/SHOW NUMBERS */}
      <div className="mt-3 ms-1 me-3 d-inline-block align-top">
        <p className="mb-1 text-start">Cell Values:</p>
        <div className="d-inline me-2">
          <ShowNumBtn 
            theme={"btn-theme-light"}
            setHideNums={setHideNums}
            hideNums={hideNums}
          />
        </div>
        <div className="d-inline">
          <HideNumBtn 
            theme={"btn-theme-light"} 
            setHideNums={setHideNums}
            hideNums={hideNums}
          />
        </div>
      </div>
      
      {/* BOARD SIZE */}
      <div className={"d-inline-block align-top text-start my-3 size-" + boardSize + "-selected"}>
        <p className="mx-1 mb-0 text-start">Board Size:</p>
        <button 
          className="btn m-1 d-inline btn-light shadow-sm fw-bold" 
          onClick={() => setBoardSize(4)}
        >4x4</button>
        <button 
          className="btn m-1 d-inline btn-light shadow-sm fw-bold" 
          onClick={() => setBoardSize(9)}
        >9x9</button>
        <button 
          className="btn m-1 d-inline btn-light shadow-sm fw-bold" 
          onClick={() => setBoardSize(16)}
        >16x16</button>
      </div>
    </div>
  );
}

export default TestConfigurator;