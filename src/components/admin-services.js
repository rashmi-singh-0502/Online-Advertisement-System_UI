import React from 'react';
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import ViewCategoryListComponent from '../components/admincomponents/view_category_list'
import AddCategoryComponent from '../components/admincomponents/add_category';
import ViewUserComponent from '../components/admincomponents/view_user_by_name';
import LogOutComponent from '../components/user_logout';

const AdminServicesComponent = (props)=>{
    
    return (
        <div>
            <LogOutComponent></LogOutComponent>
            <Tabs defaultActiveKey="Admin" id="uncontrolled-tab-example">
                <Tab eventKey="Admin add Category" title="Add Category"> 
                <AddCategoryComponent></AddCategoryComponent>
                </Tab>
                <Tab eventKey="View Category List" title="View Category List"> 
                <ViewCategoryListComponent></ViewCategoryListComponent>
                </Tab>


                <Tab eventKey="User List" title="View User List">
                  
                </Tab>
                <Tab eventKey="Delete Operation" title="Delete User">
                    
                </Tab>
                <Tab eventKey="View Operation" title="View User Details">
                    <ViewUserComponent></ViewUserComponent>
                    
                </Tab>
            </Tabs>
            <hr></hr>
        </div>
    );
}


export default AdminServicesComponent