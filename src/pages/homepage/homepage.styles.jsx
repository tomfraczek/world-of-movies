import styled from 'styled-components';
import media from '../../global/media';

export const HomepageContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top:15px;
flex-direction: column;

${media.tablet`
    flex-direction:row;
    `};
`;
