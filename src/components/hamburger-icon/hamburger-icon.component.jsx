import React from 'react';

import {
    HamburgerContainer
} from './hamburger-icon.styles';

const HamburgerIcon = ({ open, setOpen }) => {

    return(
        <HamburgerContainer open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </HamburgerContainer>
    )
}

export default HamburgerIcon;