import React, { useCallback, useState } from "react";

export default function SideNav({ sections = [{id: 'undefined'}], scrollToSection }) {

    ////    INITIALIZATION    ////

    const [activeContent, setActiveContent] = useState();


    ////    STATE MANAGMENT    ////

    const handleNavSelect = (sectionID) => {
        setActiveContent(sectionID);
        scrollToSection(sectionID);
    }

    const getActiveClass = useCallback((id) => {
        return activeContent === id ? ' active': ''
    }, [activeContent])
    

    ////    RENDERING    ////

    return (
    <div>
        {sections.map(section => 
        <div key={section.id}>
            <button
                className={'stats-toc-hoverable' + getActiveClass(section.id)}
                onClick={() => handleNavSelect(section.id)}
            >
                {section.title}
            </button>
            {section.subsections.length > 0 &&
                section.subsections.map(subsetion => 
                    <button
                        key={subsetion.id}
                        className={'stats-toc-hoverable stats-toc-indent' + getActiveClass(subsetion.id)}
                        onClick={() => handleNavSelect(subsetion.id)}
                    >
                        {subsetion.title}
                    </button>
                )
            }
        </div>)}
    </div>
    )
}