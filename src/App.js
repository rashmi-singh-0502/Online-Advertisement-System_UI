//APP CLASS / DO NOT DELETE THIS FILE
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Carousel from 'react-bootstrap/Carousel'
import { Route, Link, Switch } from 'react-router-dom'
import HomeComponent from './components/home'
import AdminServicesComponent from './components/admin-services'
import FooterComponent from './components/footercomponent'
import UserServicesComponent from './components/user-services'
/* import './components/admincomponents/admin_login' */
import Services from './components/admincomponents/admin_login'
import UserServices from './components/usercomponent/user_login'






function App() {
  return (

    <div className="App"> 
     <FooterComponent></FooterComponent>
      <Navbar bg="info" variant="dark" expand="lg">
        <Navbar.Brand href="#home">Online Advertisement System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to='/'>
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              {/* <Link to='/admin-services'> */}
              <Link to='/admin_login'>
                <NavDropdown.Item href="#adminservices">Admin</NavDropdown.Item>
              </Link>
              <Link to='/user-services'>
              <NavDropdown.Item href="#userservices"> User</NavDropdown.Item>
              </Link>

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Know More?</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>



      
      
      {/* Switching the content from nav operations */}
      <Switch>
        <Route path='/'  component={HomeComponent} exact />
        {/* <Route path='/admin-services' component={AdminServicesComponent} exact /> */}
        <Route path='/admin_login' component={Services} exact />

        <Route path='/user-services' component={UserServicesComponent} exact />
      



      </Switch>





      
    </div>
  );
}

export default App;