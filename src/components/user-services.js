import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import SearchComponent from '../components/usercomponent/searchadvertisecomponent';
import GetAdvertiseListComponent from '../components/usercomponent/read_advertise_list';
import ReadByAdvertiseTitleComponent from '../components/usercomponent/read_advertise_by_title';
import AddUser from './usercomponent/AddUser';
import {Link} from 'react-router-dom';
import '../css/user-services.css';

const UserServicesComponent = (props)=>{
    return (
        /*<div className="option-bar">
            <a><Link to={{
                pathname: '/registeruser'
                
            }}>Register into User Profile</Link></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a><Link to={{
                pathname: '/postadvertise'
                
            }}>Post New Advertise</Link></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a><Link to={{
                pathname: '/viewadvertiselist'
                
            }}>View All Advertises</Link></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a><Link to={{
                pathname: '/viewadvertisebytitle'
                
            }}>View Advertise by Title</Link></a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a><Link to={{
                pathname: '/searchadvertise'
                
            }}>Search Advertise</Link></a>&nbsp;&nbsp;&nbsp;&nbsp;
import LogOutComponent from '../components/user_logout';

const UserServicesComponent = (props)=>{
    return (
        <div>
            <LogOutComponent></LogOutComponent>
            <Tabs defaultActiveKey="User" id="uncontrolled-tab-example">
                {/* <Tab eventKey="User Profile" title="Register into User Profile"> 
                <AddUser></AddUser>
                </Tab> */
                /* <Tab eventKey="User Advetise" title="Post New Advertise">
                </Tab> */
                /* <Tab eventKey="User Read Advertise" title="Read all Advertises">
                <GetAdvertiseListComponent></GetAdvertiseListComponent>
                </Tab>
                <Tab eventKey="User Read Advertise By Title" title="Read Advertise By Title">
                <ReadByAdvertiseTitleComponent></ReadByAdvertiseTitleComponent>
                </Tab>
                <Tab eventKey="User Delete Advertise" title="Delete Advertise">
                    
                </Tab> */
                
                /* <Tab eventKey="User Search Advertise" title="Search Advertise">
                <SearchComponent></SearchComponent>
                </Tab> */
            /* </Tabs> */
            /* <hr></hr> */
        /* </div> */
        <div class="bs-example">
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a href="/registeruser" class="nav-link" data-toggle="tab">Register into User Profile</a>
        </li>
        <li class="nav-item">
            <a href="/postadvertise" class="nav-link" data-toggle="tab">Post New Advertise</a>
        </li>
        <li class="nav-item">
            <a href="/viewadvertiselist" class="nav-link" data-toggle="tab">Read all Advertises</a>
        </li>
        <li class="nav-item">
            <a href="/viewadvertisebytitle" class="nav-link" data-toggle="tab">Read Advertise By Title</a>
        </li>
        <li class="nav-item">
            <a href="/searchadvertise" class="nav-link" data-toggle="tab">Search Advertise</a>
        </li>
    </ul>
    <div class="tab-content">
        <div class="tab-pane fade show active" id="registeruser">
        </div>
        <div class="tab-pane fade" id="postadvertise">
        </div>
        <div class="tab-pane fade" id="viewadvertiselist">
        </div>
        <div class="tab-pane fade" id="viewadvertisebytitle">
        </div>
        <div class="tab-pane fade" id="searchadvertise">
        </div>
    </div>
</div>
    );
}


export default UserServicesComponent