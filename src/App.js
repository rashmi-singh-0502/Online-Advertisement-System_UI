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
import Services from './components/admincomponents/admin_login'
import UserServices from './components/usercomponent/user_login'
import Carouselcomponent from './components/carousell'
import GetAdvertiseListComponent from './components/usercomponent/read_advertise_list'
import ReadAdvertiseByTitleComponent from './components/usercomponent/read_advertise_by_title'
import AddUser from './components/usercomponent/AddUser'
import SearchComponent from './components/usercomponent/search_advertise'
import AboutUsComponent from './components/about';
import HeaderComponent from './components/header';
import ViewUserComponent from './components/admincomponents/view_user_by_name';
import AddCategoryComponent from './components/admincomponents/add_category';
import ViewCategoryListComponent from './components/admincomponents/view_category_list';
import ViewCategoryByNameComponent from './components/admincomponents/view_category_by_name';
import ShowUsers from './components/admincomponents/view_user_list'
import AddAd from './components/usercomponent/AddAd'




function App() {
  return (
    <div className="App">
      <FooterComponent></FooterComponent>
      {/* Switching the content from nav operations */}
      <Switch>
         {/*Route is the conditionally 
        shown component that renders some
         UI when its path matches the current URL.*/}
        <Route path='/admin_login' component={Services} exact />
        <Route path='/admin-services' component={AdminServicesComponent} exact />
        <Route path='/user_login' component={UserServices} exact />
        <Route path='/user-services' component={UserServicesComponent} exact />
        <Route path='/aboutus' component={AboutUsComponent} exact></Route>
        <Route path='/viewuserbyname' component={ViewUserComponent} exact />
        <Route path='/' component={HomeComponent} exact></Route>
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