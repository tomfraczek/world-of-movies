import React from 'react';

import mainImage from './assets/homepage';
import logo from '../../components/header/assets/logo.png';

import './homepage.styles.scss';

const Homepage = () => (
    <div className="homepage">
    
    <div className="banner-text">
        <img className='banner-logo' src={logo} alt=""/>
    </div>
    <img src={mainImage} alt="homepage image"/>
    </div>
)

export default Homepage