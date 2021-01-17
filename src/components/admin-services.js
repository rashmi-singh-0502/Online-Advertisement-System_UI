import React from 'react';
import LogOutComponent from './admin_logout_header';
import '../css/admin-services.css';
import Carouselcomponent from '../components/carousell';

const AdminServicesComponent = (props) => {

    return (
        <div class="bs-example">
            <LogOutComponent></LogOutComponent>
            <Carouselcomponent></Carouselcomponent>
        </div>
    );
}


export default AdminServicesComponent

           