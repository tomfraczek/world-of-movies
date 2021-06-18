import React from 'react';
import { withRouter } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { clearMovieFromFavorites, clearMovieFromWatched } from '../../redux/movies/movies.actions';

import defaultPoster from './assets/no-photos.svg';

import {
    MovieCardComponent,
    PosterContainer,
    DetailsContainer,
} from './movie-card.styles';

const MovieCard = ({movie, history, match, clearFromFavorites, clearFromWatched}) => {

    const RenderCard = () => {
        if(match.path !== '/movies/:movieId'){
            return <>
            <DetailsContainer>
                { movie.title ? <p><span>Title:</span><span>{movie.title}</span></p> : null }
                { movie.release_date ? <p><span>Release date:</span><span>{movie.release_date}</span></p> : null }
                { movie.vote_average ? <p><span>Popularity:</span><span className='movie-type'>{movie.popularity}</span></p> : null }
            </DetailsContainer>
            <CustomButton
                inverted
                onClick={() => history.push(`/movies/${movie.id}`)}
            >
                Read More
            </CustomButton>
        </>
        }

        return null;
    }

    const RenderButtons = () => {
        if(match.path === '/favorites' || match.path === '/watched'){
            return <CustomButton
                    alert
                    onClick={() => { match.path === '/favorites' ? 
                    clearFromFavorites(movie) : 
                    clearFromWatched(movie)  }}
                >
                    Remove
            </CustomButton>
        }

        return null;
    }

    return(
        <MovieCardComponent>
        <PosterContainer>
            <img src={movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : defaultPoster} alt=""/>
        </PosterContainer>

        <RenderCard />
        <RenderButtons />
        
    </MovieCardComponent>
    )
}

const mapDispatchToProps = dispatch => ({
    clearFromFavorites: movie => dispatch(clearMovieFromFavorites(movie)),
    clearFromWatched: movie => dispatch(clearMovieFromWatched(movie))
});

export default withRouter(connect(null, mapDispatchToProps)(MovieCard));
