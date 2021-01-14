import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import SearchComponent from '../components/usercomponent/searchadvertisecomponent';
import GetAdvertiseListComponent from '../components/usercomponent/read_advertise_list'

const UserServicesComponent = (props)=>{
    return (
        <div>
            <Tabs defaultActiveKey="User" id="uncontrolled-tab-example">
                <Tab eventKey="User Profile" title="Edit User Profile"> 
                   
                </Tab>
                <Tab eventKey="User Advetise" title="Post New Advertise">
                  
                </Tab>
                <Tab eventKey="User Read Advetise" title="Read all Advertises">
                <GetAdvertiseListComponent></GetAdvertiseListComponent>
                </Tab>
                <Tab eventKey="User Edit Advertise" title="Edit Advertise">
                    
                </Tab>
                <Tab eventKey="User Delete Advertise" title="Delete Advertise">
                    
                </Tab>
                <Tab eventKey="User Search Advertise" title="Search Advertise">
                <SearchComponent></SearchComponent>
                </Tab>
            </Tabs>
            <hr></hr>
        </div>
    );
}


export default UserServicesComponent