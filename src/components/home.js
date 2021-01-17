import React from 'react';
import Carouselcomponent from './carousell';
import HeaderComponent from './header';

const HomeComponent = (props) => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <Carouselcomponent></Carouselcomponent>
        </div>


    );
}


export default HomeComponent;