import React, { useCallback, useEffect, useState } from "react";

export default function SideNav({ sections = [{id: 'undefined'}], scrollToSection, scrollRefs = [], isScrolling }) {

    ////    INITIALIZATION    ////

    const [activeContent, setActiveContent] = useState();


    ////    STATE MANAGMENT    ////

    // Update Active side nav element based on scroll position
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isScrolling) {
                    setActiveContent(entry.target.id);
                }
            });
        }, {
            threshold: 0.5,
        });

        scrollRefs.forEach(section => {
            if (section) {
                observer.observe(section.current);
            }
        });

        return () => observer.disconnect();
    }, [scrollRefs, isScrolling]);

    const handleNavSelect = (sectionID) => {
        setActiveContent(sectionID);
        scrollToSection(sectionID);
    }

    const getActiveClass = useCallback((id) => {
        return activeContent === id ? ' active': '';
    }, [activeContent]);
    

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