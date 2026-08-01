import React, { useCallback, useEffect, useState } from "react";
import MenuIcon from "../../resources/icons/MenuIcon";
import { Button, Offcanvas } from "react-bootstrap";

export default function SideNav({ sections = [{id: 'undefined'}], scrollToSection, scrollRefs = [], isScrolling, mobileMode }) {

    ////    INITIALIZATION    ////

    const [activeContent, setActiveContent] = useState();
    const [showMobileSideNav, setShowMobileSideNav] = useState(false);


    ////    STATE MANAGMENT    ////

    // Update Active side nav element based on scroll position
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !(isScrolling.current)) {
                    setActiveContent(entry.target.id);
                }
            });
        }, {
            threshold: 0.1,
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
        setShowMobileSideNav(false);
    }

    const getActiveClass = useCallback((id) => {
        return activeContent === id ? ' active': '';
    }, [activeContent]);

    const handleShowMenu = () => {
        setShowMobileSideNav(true);
    }

    const handleCloseMenu = () => {
        setShowMobileSideNav(false);
    }
    

    ////    RENDERING    ////

    const getContents = () => {
        return (
            sections.map(section => 
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
            </div>)
        )
    }


    if (mobileMode) {
        return (
            <div>
                <Button variant='outline-light' className='stats-menu-btn' onClick={handleShowMenu}>
                    <MenuIcon />
                </Button>

                <Offcanvas show={showMobileSideNav} onHide={handleCloseMenu} className='stats-mobile-side-nav'>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Table Of Contents</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        {getContents()}
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        )
    }
    else {
        return (
        <div>
            {getContents()}
        </div>
        )
    }
}