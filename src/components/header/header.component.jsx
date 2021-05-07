import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = () => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <h1>World of Movies</h1>
        </Link>

        <div className="options">
            <Link className='option' to='/movies'>Search</Link>
        </div>
    </div>
)

export default Header;