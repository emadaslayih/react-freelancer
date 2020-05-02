import React from "react";

import { Navbar, Nav, Button } from "react-bootstrap";

class MainNav extends React.Component{
    render()
    {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="">React Core</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Button>Sign in</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

};

export default MainNav;