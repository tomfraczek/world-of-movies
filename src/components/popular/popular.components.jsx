import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchMoviesStartAsync } from '../../redux/movies/movies.actions';
import { selectPopularMovies, selectIsMoviesFetching } from '../../redux/movies/movies.selectors';

import MovieCard from '../../components/movie-card/movie-card.component';
import Spinner from '../../components/spinner/spinner.component';

import {
    HeaderContainer
} from './popular.styles';

const Popular = ({ fetchMoviesStartAsync, movies, isFetching }) => {

    useEffect(() => {
        fetchMoviesStartAsync();
    }, [])

    const LoadContent = () => {
        if(!isFetching){
            return movies.slice(0,10).map(movie => <MovieCard key={movie.id} movie={movie} />)
        }

        return <Spinner />
    }

    return(
        <>
            <HeaderContainer>Top 10 Popular Movies</HeaderContainer>
            <LoadContent />
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchMoviesStartAsync: movies => dispatch(fetchMoviesStartAsync(movies))
  });

  const mapStateToProps = createStructuredSelector({
    movies: selectPopularMovies,
    isFetching: selectIsMoviesFetching,
  })

export default connect(mapStateToProps, mapDispatchToProps)(Popular);