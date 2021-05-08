import React from 'react';

import mainImage from './assets/homepage';

import './homepage.styles.scss';

const Homepage = () => (
    <div className="homepage">
    
    <div className="banner-text">
        <h3>Welcome to the World of Movies</h3>
        <h4>Movie Infromation House</h4>
    </div>
    <img src={mainImage} alt="homepage image"/>
    </div>
)

export default Homepage