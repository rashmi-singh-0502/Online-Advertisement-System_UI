import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

const AdminServicesComponent = (props)=>{
    return (
        <div>
            <Tabs defaultActiveKey="Admin" id="uncontrolled-tab-example">
                <Tab eventKey="Admin add Category" title="Add Category"> 
                   
                </Tab>
                <Tab eventKey="User List" title="View User List">
                  
                </Tab>
                <Tab eventKey="Delete Operation" title="Delete User">
                    
                </Tab>
                <Tab eventKey="View Operation" title="View User Details">
                    
                </Tab>
            </Tabs>
            <hr></hr>
        </div>
    );
}


export default AdminServicesComponent