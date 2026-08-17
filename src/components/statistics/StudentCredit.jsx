import React from "react";

export default function StudentCredit({ lead, checkedBy }) {
    return (
        <p className='stats-p'>
            Lead: <span className='stats-credit'>{lead}</span> Checked by: <span className='stats-credit'>{checkedBy?.[0]}</span> and <span className='stats-credit'>{checkedBy?.[1]}</span>
        </p>
    )
}