import React from 'react';
import '../css/user-services.css';
import LogOutComponent from './user_logout_header';
import Carouselcomponent from '../components/carousell';
import FooterComponent from '../components/footercomponent';
const UserServicesComponent = (props) => {
    return (
        <div class="bs-example">
            <LogOutComponent></LogOutComponent>
            <Carouselcomponent></Carouselcomponent>
            <FooterComponent></FooterComponent>
        </div>
    );
}


export default UserServicesComponent