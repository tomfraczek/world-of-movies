import React, { useContext } from 'react';

import MoviesContext from '../../context/movies/movies.context';

import MovieCard from '../movie-card/movie-card.component';

const MoviesPreview = () => {
    const movies = useContext(MoviesContext);

    return(
        <div className="movies-preview">
            {
                movies ? movies.map(movie => 
                    <MovieCard key={movie.imdbID} movie={movie} />) 
                : null
            }
        </div>
    )
}

export default MoviesPreview;