import React from 'react';

import MovieCard from '../movie-card/movie-card.component';
import Notification from '../notification/notification.component';


import {
    CardsPreviewContainer,
} from './cards-preview.styles';

const CardsPreview = ({data}) => (
    <CardsPreviewContainer>
        {
            data.length ? 
            data.map(element => <MovieCard key={element.id} movie={element} />)
            :
                <Notification content='Nothing to show' />
        }
    </CardsPreviewContainer>
    
)

export default CardsPreview;