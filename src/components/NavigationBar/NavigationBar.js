import React from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap'

const navigationBar = (props) => (
   <Navbar fixed="top" className="navbar-dark bg-dark">
       <NavbarBrand href="#">Management</NavbarBrand>
        <Nav className="">
            <NavItem>
              <NavLink>Components</NavLink>
            </NavItem>
        </Nav>
   </Navbar>
);

export default navigationBar; 