import React from "react";

import { Button, Col, Container, Row } from "react-bootstrap";

import { PRIMARY_ROUTES, methods, COMMANDS, commandFunctions } from "../resources/text/routes";
import '../styles/Footer.css'


export default function Foorter({ navChangeCallback }) {

  const onClickFooterLink = (link) => {
    navChangeCallback(link);
  }
  const onClickFooterCommand = (command) => {
    commandFunctions[command]();
  }

  const getPaths = () => {
    return PRIMARY_ROUTES.map((path) => (
      <Button
        variant={'link'}
        key={path}
        onClick={() => onClickFooterLink(path)}
        className='footer__link'
      >
        <span>{ path }</span>
      </Button>
    ));
  };

  const getMethods = () => {
    if (methods.length === 0) {
      return <span className='footer__item'>There are no methods for the current page</span>
    }
    return methods.map((method) => (
      <Button
        variant={'link'}
        key={method}
        onClick={() => onClickFooterLink(method)}
        className='footer__link'
      >
        <span>{ method }</span>
      </Button>
    ));
  };

  const getCommands = () => {
    return COMMANDS.map((command) => (
      <Button
        variant={'link'}
        key={command.route}
        onClick={() => onClickFooterCommand(command.route)}
        className='footer__link'
      >
        <span>{ command.route }</span>
      </Button>
    ));
  };

  return (
    <div className="footer">
    <Container>
      <Row>
        <Col className="px-5 text-sm-center">
          <h4>{'>'} terminal_commands</h4>
        </Col>
      </Row>
      <Row>
        <Col className="px-5">
          <div className="left-center d-flex flex-column">
            <h5>/paths</h5>
            {getPaths()}
          </div>
        </Col>
        <Col className="px-5">
          <div className="left-center d-flex flex-column">
            <h5>.methods()</h5>
            {getMethods()}
          </div>
        </Col>
        <Col className="px-5">
          <div className="left-center d-flex flex-column">
            <h5>commands</h5>
            {getCommands()}
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}