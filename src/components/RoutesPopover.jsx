import React, { useLayoutEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

import '../styles/RoutesPopover.css';

export default function RoutesPopover({ routes, override, selectionCallback }) {
  const [showMenu, setShowMenu] = useState(false);

  useLayoutEffect(() => {
    if (routes.length > 0 && override) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }, [routes, override]);


  // EVENT HANDLERS
  
  const handleOnToggle = (nextShow, meta) => {
    if (routes.length > 0 && override) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  const handleOnSelect = (eventKey, event) => {
    selectionCallback(eventKey);
  }

  return (
    <Dropdown
      drop='end'
      as='span'
      align='end'
      className='d-inline-block w-0'
      onToggle={handleOnToggle}
      onSelect={handleOnSelect}
      show={showMenu}
      autoClose={false}
    >
      <DropdownToggle className='routes-popover-pos' aria-disabled disabled/>
      <DropdownMenu
        as='span'
        className='autocomplete-menu'
        flip={false}
      >
        {routes.map((route) => (
          <DropdownItem
            as='span'
            className='terminal-ignore-blur'
            eventKey={route}
            key={route}
            onMouseDown={(e) => e.preventDefault()}
          >
            {route}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};