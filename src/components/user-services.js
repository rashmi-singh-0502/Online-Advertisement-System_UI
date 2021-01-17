import React from 'react';
import '../css/user-services.css';
import LogOutComponent from './user_logout_header';
import Carouselcomponent from '../components/carousell';

const UserServicesComponent = (props) => {
    return (
        <div class="bs-example">
            <LogOutComponent></LogOutComponent>
            <Carouselcomponent></Carouselcomponent>
        </div>
    );
}


export default UserServicesComponent