import React, { useCallback, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

import MenuIcon from "../../resources/icons/MenuIcon";

import { TOP_NAV_ROUTES } from "../../resources/text/routes";
import '../../styles/TopNav.css';

export default function TopNav({ navChangeCallback, mobileMode, currentPage, selectedTopic, setSelectedTopic }) {

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

  const handleMenuExited = useCallback(() => {
    if (menuSelection) {
      handleClick(menuSelection);
      setMenuSelection(false);
    }
  }, [menuSelection, handleClick]);


  ////    RENDERING    ////


  if (mobileMode) {
    return (
      <div className={'padding-margins top-nav' }>
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
              onClick={() => { handleMenuSelection(navRoute.route); }}
              className='top-nav__menu-item top-nav__menu-item--mobile'
              key={navRoute.route}
              aria-label={navRoute.desc}
            >
              {navRoute.route}
            </button>
          )) }
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    );
  }
  return (
    <div className='top-nav padding-margins'>
      { TOP_NAV_ROUTES.map((navRoute) => (
        <button
          onClick={() => { handleClick(navRoute.route); }}
          className='top-nav__item'
          key={navRoute.route}
          aria-label={navRoute.desc}
        >
          {navRoute.route}
        </button>
      )) }
    </div>
  );
}