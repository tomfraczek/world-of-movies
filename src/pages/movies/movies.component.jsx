import React from 'react';
import { withRouter, Route } from 'react-router';

import MoviesOverview from '../../components/movies-overview/movies-overview.component';
import MoviePage from '../movie/movie.component';

import './movies.styles.scss'

const MoviesPage = ({match}) => (
    <div className="movies-page">
        <Route exact path={`${match.path}`} component={MoviesOverview}/>
        <Route path={`${match.path}/:movieId`} component={MoviePage}/>
    </div>
)

export default withRouter(MoviesPage);