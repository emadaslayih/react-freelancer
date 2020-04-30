import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="">Action</NavDropdown.Item>
            <NavDropdown.Item href="">Another action</NavDropdown.Item>
            <NavDropdown.Item href="">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
