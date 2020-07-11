import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

const RouterNavLink = ({ children, ...props }) => {
  return (
    <LinkContainer {...props}>
      <Nav.Link active={false}>{children}</Nav.Link>
    </LinkContainer>
  );
};

export default RouterNavLink;
