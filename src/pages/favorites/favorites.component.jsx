import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectFavorites } from '../../redux/movies/movies.selectors';

import CardsPreview from '../../components/cards-preview/cards-preview.component';

import { HeaderContainer } from '../../components/popular/popular.styles';


const Favorites = ({favorites}) => (
    <>
        <HeaderContainer>Your Favorite Movies</HeaderContainer>
        <CardsPreview data={favorites} /> 
    </>
)

const mapStateToProps = createStructuredSelector({
    favorites: selectFavorites,
})


export default connect(mapStateToProps)(Favorites);