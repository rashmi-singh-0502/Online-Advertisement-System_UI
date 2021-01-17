import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import '../css/admin_logout.css'

const LogOutComponent = (props) => {
   return (
      <Navbar className="header_back" variant="dark" expand="lg">
         <Navbar.Brand href="#home">
            <img
               src="/oas_logo.PNG"
               width="100"
               height="55"
               className="d-inline-block align-center"
            />Online Advertisement System
        </Navbar.Brand>&nbsp;&nbsp;&nbsp;

         <NavDropdown title="Services" id="basic-nav-dropdown">
            <Link to='/postadvertise'>
               <NavDropdown.Item href="/postadvertise">Post New Advertise</NavDropdown.Item>
            </Link>
            <Link to='/viewadvertiselist'>
               <NavDropdown.Item href="/viewadvertiselist">Read all Advertises</NavDropdown.Item>
            </Link>
            <Link to='/viewadvertisebytitle'>
               <NavDropdown.Item href="/viewadvertisebytitle">Read Advertise By Title</NavDropdown.Item>
            </Link>
            <Link to='/searchadvertise'>
               <NavDropdown.Item href="/searchadvertise">Search Advertise</NavDropdown.Item>
            </Link>
         </NavDropdown>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
               <Nav.Link href="/" id="logout">Logout</Nav.Link>
            </Nav>
         </Navbar.Collapse>
      </Navbar>

   );
}
export default LogOutComponent;