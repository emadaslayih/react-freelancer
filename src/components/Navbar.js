import React from "react";

import { Navbar, Nav, Button } from "react-bootstrap";

export default (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Button>{props.btnText}</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
