import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import "./style.css";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="#452049" dark expand="md" className="navbar">
        <Link to="/">
        <NavbarBrand href="/">Lisa Worsham</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">
              <NavLink>About Me</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/projects">
              <NavLink>Projects</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">
              <NavLink>Contact</NavLink>
              </Link>
            </NavItem>
          </Nav>
          <NavbarText color="white">Built with React</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;