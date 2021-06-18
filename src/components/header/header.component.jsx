import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';

import SideMenu from '../side-menu/side-menu.component';
import HamburgerIcon from '../hamburger-icon/hamburger-icon.component';

import logo from './assets/logo.jpg';

import {
    HeaderContainer,
    LogoContainer
} from './header.styles'

const Header = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();

    return(
        <HeaderContainer ref={node}>
            <LogoContainer as={Link} to='/'>
                <img className='logo-header' src={logo} alt=""/>
            </LogoContainer>
                <HamburgerIcon open={open} setOpen={setOpen} />
                <SideMenu open={open} setOpen={setOpen} />
        </HeaderContainer>
)}

export default Header;