import styled from 'styled-components';
import media from '../../global/media';

export const MovieCardComponent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    transition: background 0.3s ease;

    ${media.desktop`
        width: calc(33.3% - 20px);
        margin: 0 10px 40px 10px;
    `};
`;

export const PosterContainer = styled.div`
    height: auto
    max-width: 100%;

    img{
        width:100%;
        height:100%;
        max-width: 100%;
    }
`;

export const DetailsContainer = styled.div`
    margin-top: auto;
    p{
        display: flex;
        justify-content: space-between;

        span:last-of-type{
            text-align: right;
        }

        .movie-type{
            text-transform: capitalize;
        }
    }
`;