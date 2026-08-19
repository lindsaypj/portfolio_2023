import React, { useCallback, useEffect, useState } from "react";
import MenuIcon from "../../resources/icons/MenuIcon";
import { Button, Offcanvas } from "react-bootstrap";

export default function SideNav({ sections = [{startID: 'undefined'}], scrollToSection, pageRefs = [], isScrolling, tocRef, mobileMode }) {

    ////    INITIALIZATION    ////

    const [activeContent, setActiveContent] = useState();
    const [showMobileSideNav, setShowMobileSideNav] = useState(false);


    ////    STATE MANAGMENT    ////

    // Update Active side nav element based on scroll position
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !(isScrolling.current)) {
                    setActiveContent(entry.target.id.slice(6));
                }
            });
        }, {
            threshold: 0.5,
        });

        pageRefs.forEach(section => {
            if (section) {
                observer.observe(section.current);
            }
        });

        return () => observer.disconnect();
    }, [pageRefs, isScrolling]);

    const handleNavSelect = (sectionID) => {
        setActiveContent(sectionID.slice(6));
        scrollToSection(sectionID);
        setShowMobileSideNav(false);
    }

    const handleTOCSelect = () => {
        tocRef.current.scrollIntoView({ behavior: 'smooth' });
        setShowMobileSideNav(false);
    }

    const getActiveClass = useCallback((id) => {
        return activeContent === id.slice(6) ? ' active': '';
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
            <div key={section.startID}>
                <button
                    className={'stats-toc-hoverable' + getActiveClass(section.startID)}
                    onClick={() => handleNavSelect(section.startID)}
                >
                    {section.title}
                </button>
                {section.subsections.length > 0 &&
                    section.subsections.map(subsetion => 
                        <button
                            key={subsetion.startID}
                            className={'stats-toc-hoverable stats-toc-indent' + getActiveClass(subsetion.startID)}
                            onClick={() => handleNavSelect(subsetion.startID)}
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
                    <Offcanvas.Title>
                        <button
                            className={'stats-toc-hoverable fs-4'}
                            onClick={() => handleTOCSelect()}
                        >
                            Table of Contents
                        </button>
                    </Offcanvas.Title>
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
            <div>
                <button
                    className={'stats-toc-hoverable'}
                    onClick={() => handleTOCSelect()}
                >
                    Table of Contents
                </button>
            </div>
            {getContents()}
        </div>
        )
    }
}