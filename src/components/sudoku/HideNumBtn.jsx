import React, { useState, useEffect } from 'react';

import '../../styles/ShowNumBtn.css';
import '../../styles/HideNumBtn.css';

function HideNumBtn(props) {
    const [selected, setSelected] = useState(true);

    useEffect(() => {
        setSelected(props.hideNums);
    }, [props.hideNums]); 

    return (
        <button 
            type='button'
            className={'btn shadow-sm bg-light p-2 text-center selected-'+selected} 
            onClick={() => props.setHideNums(true)}
        >
            <div className='p-0 d-block'>
                <div className='p-1 d-inline-block cell-1 bg-cell-1'>
                    <span className='btn-cell'>1</span>
                </div>
                <div className='p-1 d-inline-block cell-2 bg-cell-2'>
                    <span className='btn-cell'>2</span>
                </div>
            </div>
            <div className='p-0 d-flex'>
                <div className='p-1 d-inline-block cell-3 bg-cell-3'>
                    <span className='btn-cell'>3</span>
                </div>
                <div className='p-1 d-inline-block cell-4 bg-cell-4'>
                    <span className='btn-cell'>4</span>
                </div>
            </div>
        </button>
    );
}

export default HideNumBtn;