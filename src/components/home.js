import React from 'react';
import Carouselcomponent from './carousell';
import HeaderComponent from './header';
import FooterComponent from '../components/footercomponent';

const HomeComponent = (props) => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <Carouselcomponent></Carouselcomponent>
            <FooterComponent></FooterComponent>
        </div>


    );
}


export default HomeComponent;