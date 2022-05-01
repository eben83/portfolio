import React, {Component, useState} from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import styled from "styled-components";

const NavMenu = (props) => {
  
  const [collapse, setCollapse] = useState(false)
    
  
  const toggleNavbar = () => {
    setCollapse(!collapse)
  }
  
  

    return (
      <header>
        <NavWrapper>
          <Navbar className="navbar-expand-sm navbar-toggleable-sm ">
            <Container>
              <NavbarBrand className='text-white' tag={Link} to="/">Eben Buger</NavbarBrand>
              <NavbarToggler onClick={toggleNavbar} className="mr-2 text-white" />
              <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={collapse} navbar>
                <ul className="navbar-nav flex-grow">
                  <NavItem>
                    <NavLink tag={Link} to="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/">Projects</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink tag={Link} to="/">Contact</NavLink>
                  </NavItem>
                </ul>
              </Collapse>
            </Container>
          </Navbar>
        </NavWrapper>
      </header>
    );
}

const NavWrapper = styled.div`
  background: #252734;
  //position: fixed;
  //top: 0;
`

export default NavMenu
