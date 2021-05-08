import React from 'react';
import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import logo from './assets/logo.jpg';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <img className='logo-header' src={logo} alt=""/>
        </Link>

        <div className="options">
            <Link className='option' to='/movies'>
                <CustomButton
                    inverted
                    naked
                >
                    Search
                </CustomButton>
            </Link>
        </div>
    </div>
)

export default Header;