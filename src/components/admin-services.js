import React from 'react';
import LogOutComponent from './admin_logout_header';
import '../css/admin-services.css';
import Carouselcomponent from '../components/carousell';
import FooterComponent from '../components/footercomponent';

const AdminServicesComponent = (props) => {

    return (
        <div class="bs-example">
            <LogOutComponent></LogOutComponent>
            <Carouselcomponent></Carouselcomponent>
            <FooterComponent></FooterComponent>
        </div>
    );
}


export default AdminServicesComponent

