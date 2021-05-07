import React from 'react';
import { withRouter } from 'react-router-dom';

import defaultPoster from './assets/no-photos.svg';

import './movie-card.styles.scss';

const MovieCard = ({movie, history, match}) => (
    <div className="movie-card" onClick={() => history.push(`${match.url}/${movie.imdbID}`)}>
        <div className="movie-poster">
            <img src={movie.Poster !== 'N/A' ? movie.Poster : defaultPoster} alt=""/>
        </div>

        <div className="movie-details">
            { movie.Title ? <p><span>Title:</span><span>{movie.Title}</span></p> : null }
            { movie.Year ? <p><span>Year:</span><span>{movie.Year}</span></p> : null }
            { movie.Type ? <p><span>Type:</span><span className='movie-type'>{movie.Type}</span></p> : null }
        </div>
    </div>
)

export default withRouter(MovieCard);