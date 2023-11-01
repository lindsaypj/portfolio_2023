import React from "react";

import { Col, Container, Row } from "react-bootstrap";

import { paths, methods, commands } from "../resources/text/routes";
import '../styles/Footer.css'


export default function Foorter({ navChangeCallback }) {

  const onClickFooterLink = (link) => {
    navChangeCallback(link);
  }

  const getPaths = () => {
    return paths.map((path) => (
      <a
        key={path}
        onClick={() => onClickFooterLink(path)}
        className='footer__link'
      >
        <span>{ path }</span>
      </a>
    ));
  };

  const getMethods = () => {
    return methods.map((method) => (
      <a
        key={method}
        onClick={() => onClickFooterLink(method)}
        className='footer__link'
      >
        <span>{ method }</span>
      </a>
    ));
  };

  const getCommands = () => {
    return commands.map((command) => (
      <a
        key={command}
        onClick={() => onClickFooterLink(command)}
        className='footer__link'
      >
        <span>{ command }</span>
      </a>
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