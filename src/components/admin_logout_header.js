import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import '../css/admin_logout.css'

const LogOutComponent = (props) => {
  return (
    <Navbar className="header_back" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          src="/oas_logo.PNG"
          width="100"
          height="55"
          className="d-inline-block align-center"
        />Online Advertisement System
        </Navbar.Brand>&nbsp;&nbsp;&nbsp;
      <NavDropdown title="Services" id="basic-nav-dropdown">
        <Link to='/addcategorycomponent'>
          <NavDropdown.Item href="/addcategorycomponent">Add Category</NavDropdown.Item>
        </Link>
        <Link to='/viewcategorylist'>
          <NavDropdown.Item href="/viewcategorylist">View Category List</NavDropdown.Item>
        </Link>
        <Link to='/viewcategorybyname'>
          <NavDropdown.Item href="/viewcategorybyname">View Category By Name</NavDropdown.Item>
        </Link>
        <Link to='/viewuserlist'>
          <NavDropdown.Item href="/viewuserlist">View User List</NavDropdown.Item>
        </Link>
        <Link to='/viewuserbyname'>
          <NavDropdown.Item href="/viewuserbyname">View User By Name</NavDropdown.Item>
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