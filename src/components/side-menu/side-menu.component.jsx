import React from 'react';
import { Link } from 'react-router-dom';

import {
    SideMenuContainer,
    ListContainer
} from './side-menu.styles';

const SideMenu = ({ open, setOpen }) => (
    <SideMenuContainer open={open}>
        <ListContainer>
            <Link to="/favorites" onClick={() => setOpen(false)}>
                Favorites
            </Link>
            <Link to="/watched" onClick={() => setOpen(false)}>
                Watched
            </Link>
            <Link to="/search" onClick={() => setOpen(false)}>
                search
            </Link>
        </ListContainer>
    
    </SideMenuContainer>
)

export default SideMenu;