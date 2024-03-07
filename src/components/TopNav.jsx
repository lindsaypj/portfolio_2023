import React, { useCallback, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import AccordionNav from "./AccordionNav";

import MenuIcon from "../resources/icons/MenuIcon";

import { getPrimaryRoute } from "../scripts/utils";
import { TOP_NAV_ROUTES } from "../resources/text/routes";
import { LEARNING_TOPICS } from "../resources/text/learning";
import '../styles/TopNav.css';

export default function TopNav({ navChangeCallback, mobileMode, currentPage, selectedTopic, setSelectedTopic, accordionKey, setAccordionKey }) {

  const [menuSelection, setMenuSelection] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleCloseMenu = () => setShowMobileMenu(false);
  const handleShowMenu = () => setShowMobileMenu(true);

  const handleClick = useCallback((navRoute) => {
    navChangeCallback(navRoute);
  }, [navChangeCallback]);

  const handleMenuSelection = useCallback((navRoute) => {
    setMenuSelection(navRoute);
    handleCloseMenu();
  }, [setMenuSelection]);

  const handleAccordionSelection = useCallback((topic) => {
    setSelectedTopic(topic);
    const nextRoute = '/learning' + topic;
    handleMenuSelection(nextRoute);
  }, [handleMenuSelection, setSelectedTopic]);

  const handleMenuExited = useCallback(() => {
    if (menuSelection) {
      handleClick(menuSelection);
      setMenuSelection(false);
    }
  }, [menuSelection, handleClick]);


  ////    RENDERING    ////

  const getAccordionKey = useCallback(() => {
    return accordionKey;
  }, [accordionKey]);

  const getAccordion = () => {
    const primaryRoute = getPrimaryRoute(currentPage);
    if (primaryRoute === '/learning') {
      return (
        <AccordionNav
          accordionKey={getAccordionKey()}
          setAccordionKey={setAccordionKey}
          topics={LEARNING_TOPICS}
          selectedTopic={selectedTopic}
          handleTopicSelection={handleAccordionSelection}
        />
      )
    }
  }

  const getPositioning = useCallback(() => {
    const primaryRoute = getPrimaryRoute(currentPage);
    return primaryRoute === '/learning' ? ' top-nav-fixed' : ' top-nav';
  }, [currentPage]);

  if (mobileMode) {
    return (
      <div className={'padding-margins' + getPositioning() }>
        <Button variant='outline-light' className='top-nav__menu-btn' onClick={handleShowMenu}>
          <MenuIcon />
        </Button>

        <Offcanvas
          show={showMobileMenu}
          onHide={handleCloseMenu}
          onExited={handleMenuExited}
          placement='end'
          className='top-nav__menu bg-dark'
        >
          <Offcanvas.Header closeButton>
          </Offcanvas.Header>
          <Offcanvas.Body className='pt-1'>
          { TOP_NAV_ROUTES.map((navRoute) => (
            <button
              onClick={() => { handleMenuSelection(navRoute); }}
              className='top-nav__menu-item top-nav__menu-item--mobile'
              key={navRoute}
            >
              {navRoute}
            </button>
          )) }
          { getAccordion() }
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
  return (
    <div className='top-nav padding-margins'>
      { TOP_NAV_ROUTES.map((navRoute) => (
        <button
          onClick={() => { handleClick(navRoute); }}
          className='top-nav__item'
          key={navRoute}
        >
          {navRoute}
        </button>
      )) }
    </div>
  );
}