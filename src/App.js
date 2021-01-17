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
import Carouselcomponent from './components/carousell'
import GetAdvertiseListComponent from './components/usercomponent/read_advertise_list'
import ReadAdvertiseByTitleComponent from './components/usercomponent/read_advertise_by_title'
import AddUser from './components/usercomponent/AddUser'
import SearchComponent from './components/usercomponent/searchadvertisecomponent';
import AddCategoryComponent from './components/admincomponents/add_category';
import ViewCategoryListComponent from './components/admincomponents/view_category_list';
import ViewCategoryByNameComponent from './components/admincomponents/view_category_by_name';
import ShowUsers from './components/admincomponents/view_user_list'

import AddAd from './components/usercomponent/AddAd'




function App() {
  return (

    <div className="App">
      <FooterComponent></FooterComponent>
      <Navbar bg="info" variant="dark" expand="lg">
        {/* <Navbar.Brand href="#home">Online Advertisement System</Navbar.Brand> */}
        <Navbar.Brand href="#home">
        <img
        src="/oas_logo.PNG"
        width="100"
        height="55"
        className="d-inline-block align-center"
      />Online Advertisement System
        </Navbar.Brand>
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
              {/* <Link to='/user-services'> */}
              <Link to='/user_login'>
                <NavDropdown.Item href="#userservices"> User</NavDropdown.Item>
              </Link>

              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.1">Know More?</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>





      {/* Switching the content from nav operations */}
      <Switch>
         {/*Route is the conditionally 
        shown component that renders some
         UI when its path matches the current URL.*/}
        <Route path='/' component={Carouselcomponent} exact />
        <Route path='/admin_login' component={Services} exact />
        <Route path='/admin-services' component={AdminServicesComponent} exact />
        <Route path='/user_login' component={UserServices} exact />
        <Route path='/user-services' component={UserServicesComponent} exact />
        <Route path='/viewadvertiselist' component={GetAdvertiseListComponent}></Route>
        <Route path='/viewadvertisebytitle' component={ReadAdvertiseByTitleComponent}></Route>
        <Route path='/registeruser' component={AddUser}></Route>
        <Route path='/postadvertise' component={AddAd}></Route>
        <Route path='/searchadvertise' component={SearchComponent}></Route>
        <Route path='/addcategorycomponent' component={AddCategoryComponent} exact />
        <Route path='/viewcategorylist' component={ViewCategoryListComponent} exact />
        <Route path='/viewcategorybyname' component={ViewCategoryByNameComponent} exact />
        <Route path='/viewuserlist' component={ShowUsers} exact />




      </Switch>






    </div>
  );
}

export default App;