import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

const UserServicesComponent = (props)=>{
    return (
        <div>
            <Tabs defaultActiveKey="User" id="uncontrolled-tab-example">
                <Tab eventKey="User Profile" title="Edit User Profile"> 
                   
                </Tab>
                <Tab eventKey="User Advetise" title="Post New Advertise">
                  
                </Tab>
                <Tab eventKey="User Edit Advertise" title="Edit Advertise">
                    
                </Tab>
                <Tab eventKey="User Delete Advertise" title="Delete Advertise">
                    
                </Tab>
                <Tab eventKey="User View Advertise" title="Read Advertise">
                
                </Tab>
            </Tabs>
            <hr></hr>
        </div>
    );
}


export default UserServicesComponent