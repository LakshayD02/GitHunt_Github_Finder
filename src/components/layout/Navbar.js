import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, Icon, Container } from "semantic-ui-react";

function Navbar() {
  return (
    <Menu borderless inverted fixed="top" color="blue">
      <Container>
        <Menu.Item as={Link} to="/" className="brand">
          <Menu.Header as="h3">
            <Icon name="github" />
            GitHunt
          </Menu.Header>
        </Menu.Item>
        <Menu.Item as={Link} to="/" position="right">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as={NavLink} to="/about">
          <Icon name="info" />
          About
        </Menu.Item>
      </Container>
    </Menu>
  );
}

// Media Query CSS
const styles = `
  @media only screen and (max-width: 768px) {
    .brand h3 {
      font-size: 1.5rem;
    }
  }
`;

// Injecting CSS into the component
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default Navbar;
