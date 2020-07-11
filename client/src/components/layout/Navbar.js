import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import RouterNavLink from "./RouterNavLink";

const _Navbar = () => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      collapseOnSelect={true}
      fixed="top"
    >
      <Container>
        <Navbar.Brand href="#home">
          <i className="fas fa-fire fa-2x"></i>
          <span className="brand-name">sociio</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <RouterNavLink exact to="/">
              Home
            </RouterNavLink>
            <RouterNavLink exact to="/">
              Profile
            </RouterNavLink>
            <RouterNavLink exact to="/">
              Login
            </RouterNavLink>
            <RouterNavLink exact to="/">
              Logout
            </RouterNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default _Navbar;
