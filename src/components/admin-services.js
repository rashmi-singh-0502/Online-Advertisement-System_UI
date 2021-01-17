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
            <div class="bs-example">
                <ul class="nav nav-tabs">

                    <li class="nav-item">
                        <a href="/addcategorycomponent" class="nav-link" data-toggle="tab">Add Category</a>
                    </li>
                    <li class="nav-item">
                        <a href="/viewcategorylist" class="nav-link" data-toggle="tab">View Category List</a>
                    </li>
                    <li class="nav-item">
                        <a href="/viewcategorybyname" class="nav-link" data-toggle="tab">View Category By Name</a>
                    </li>
                    <li class="nav-item">
                        <a href="/viewuserlist" class="nav-link" data-toggle="tab">View User List</a>
                    </li>
                    <li class="nav-item">
                        <a href="/viewuserbyname" class="nav-link" data-toggle="tab">View User By Name</a>
                    </li>
                </ul>
                <div class="tab-content">

                    <div class="tab-pane fade" id="addcategory">
                    </div>
                    <div class="tab-pane fade" id="viewcategorylist">
                    </div>
                    <div class="tab-pane fade" id="viewcategorybyname">
                    </div>
                    <div class="tab-pane fade" id="viewuserlist">
                    </div>
                    <div class="tab-pane fade" id="viewuserbyname">
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>
    );
}


export default AdminServicesComponent

           