import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectWatched } from '../../redux/movies/movies.selectors';

import CardsPreview from '../../components/cards-preview/cards-preview.component';

import { HeaderContainer } from '../../components/popular/popular.styles';

const Watched = ({watched}) => (
    <>
        <HeaderContainer>Movies You Have Already Seen</HeaderContainer>
        <CardsPreview data={watched} />
    </>
)

const mapStateToProps = createStructuredSelector({
    watched: selectWatched,
})

export default connect(mapStateToProps)(Watched);