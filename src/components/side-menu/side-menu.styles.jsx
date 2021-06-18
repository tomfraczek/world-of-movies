import styled from 'styled-components';
import { GlobalWidth } from '../../global/breakpoints';

export const SideMenuContainer = styled.div`
    z-index:10;
    background: #EFFFFA;
    transform: ${({ open }) => open ? 'translateY(0)' : 'translateY(-100%)'};
    width: 100vw;
    text-align: left;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: #0D0C1D;
        text-decoration: none;
        transition: color 0.3s linear;

        @media (max-width: 576px) {
            font-size: 1.5rem;
            text-align: center;
        }

        &:hover {
            color: #343078;
        }
    }

     button{
         z-index: 11;
     }
`;

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    ${GlobalWidth};
`;