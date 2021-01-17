import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link} from 'react-router-dom'
import '../css/header.css'

function HeaderComponent ()
{
    return (
        <div>
            <Navbar className="header_back" variant="dark" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="/oas_logo.PNG"
            width="100"
            height="55"
            className="d-inline-block align-center"
          />Online Advertisement System
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto rightalign">
            <Link to='/'>
              <Nav.Link href="/" id="home">Home</Nav.Link>
            </Link>
            <Nav.Link href="/aboutus" id="aboutus">About Us</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <Link to='/admin_login'>
                <NavDropdown.Item href="#adminservices">Admin</NavDropdown.Item>
              </Link>
              <Link to='/user_login'>
                <NavDropdown.Item href="#userservices"> User</NavDropdown.Item>
              </Link>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
}

export default HeaderComponent;
