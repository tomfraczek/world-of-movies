import styled from 'styled-components';
import media from '../../global/media';

export const MoviePageContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-top:40px;
    flex-direction: column;

    ${media.tablet`
    flex-direction: row;
    `};
`;

export const MovieHeader = styled.div`
    margin-top: 15px;

    h1, span{
        margin: 0 0 10px;
    }

    span{
        color: #70757a;
        margin-right: 10px;
    }
`;

export const OtherInfoContainer = styled.div`
    display: flex;
`;

export const DescriptionContainer = styled.div`
    color: #4d5156;
`;

export const OptionsContainer = styled.div`
    margin-top:50px;
    display: flex;
    justify-content: space-evenly;
`;