import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addWatched, addFavorites, clearMovieFromFavorites, clearMovieFromWatched } from '../../redux/movies/movies.actions';
import { selectFavorites, selectWatched } from '../../redux/movies/movies.selectors';

import MovieCard from '../../components/movie-card/movie-card.component';
import Spinner from '../../components/spinner/spinner.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomInformation from '../../components/custom-information/custom-information.component';

import TickIcon from './assets/tick.png';
import SaveIcon from './assets/ribbon.png';
import './movie.styles.scss';

import {
  MoviePageContainer,
  MovieHeader,
  OtherInfoContainer,
  DescriptionContainer,
  OptionsContainer
} from './movie.styles';


const MoviePage = ({
  history, 
  match, 
  addWatched, 
  addFavorites, 
  favorites, 
  watched, 
  clearFromFavorites, 
  clearFromWatched
}) => {
  const [api_key] = useState('e45ac1ce50026e393e410d2e2e194418');
  const [data, setData] = useState({
    isLoaded: false,
    result: null,
  });
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatched, setIsWatched] = useState(false);

  useEffect(() => {
    console.log(isFavorite)
    setData({isLoaded: false});

    fetch(`https://api.themoviedb.org/3/movie/${match.params.movieId}?api_key=${api_key}`)
    .then(response => response.json())
    .then(data => {
      if(favorites.find(listMovie => listMovie.id === data.id)){
        setIsFavorite(true);
      }

      console.log(watched.find(listMovie => listMovie.id === data.id))
      if(watched.find(listMovie => listMovie.id === data.id)){
        setIsWatched(true);
      }

      setData({
        isLoaded: true,
        result: data,
      })
    })
    .catch(error => {
      setData({isLoaded: false})
      console.log(error.message)
    });
    
  }, [])

    const minsToHHMM = mins => {
      var mins_num = parseFloat(mins, 10);
      var hours   = Math.floor(mins_num / 60);
      var minutes = Math.floor((mins_num - ((hours * 3600)) / 60));
  
      if (minutes < 10) {minutes = "0"+minutes;}
      return hours+'h'+minutes+'m';
    }
  
    const DisplayMovieHeader = () => (
      <MovieHeader>
        <h1>{data.result.title}</h1>
        <OtherInfoContainer>
          <span>{data.result.release_date.split("-")[0]}</span>
          {
            data.result.genres.map(genre => 
              <CustomInformation 
                key={genre.id}
                information={genre.name}
              />
            )
          }

          <CustomInformation 
            information={minsToHHMM(data.result.runtime)}
          />
        </OtherInfoContainer>
      </MovieHeader>
    )

    const handleFavorites = () => {
      if(isFavorite){
        clearFromFavorites(data.result);
        setIsFavorite(false);
      } else {
        addFavorites(data.result);
        setIsFavorite(true);
      }
    }

    const handleWatched = () => {
      if(isWatched){
        clearFromWatched(data.result);
        setIsWatched(false);
      } else {
        addWatched(data.result);
        setIsWatched(true);
      }
    }
    
    
  return(
            <>
          {
            data.isLoaded ? 
            <MoviePageContainer>  
              <MovieCard movie={data.result} /> 

              <div className="movie-details-container">
              <CustomButton
                inverted
                naked
                onClick={() => history.goBack()}
              >
                Go Back
              </CustomButton>
              <DisplayMovieHeader />

              <DescriptionContainer>
              <CustomInformation 
                  information={data.result.overview}
                  classname='movie-detail movie-plot'
                />
              </DescriptionContainer>
              

              <>
              <CustomInformation 
                    information={data.result.release_date}
                    title='Release date:'
                  />
              </>
    
              <OptionsContainer>
                
            

              <CustomButton 
                inverted 
                icon
                onClick={handleWatched}
              >
                <img src={TickIcon} alt="" />
                {
                  isWatched ? 'Never seen' : 'Watched it'
                }
              </CustomButton>

              <CustomButton 
                inverted 
                icon
                onClick={handleFavorites}
              >
                <img src={SaveIcon} alt="" />
                {
                  isFavorite ? 'Remove from Favorite' : 'Add to Favorites'
                }
              </CustomButton>
              </OptionsContainer>

              </div>
            </MoviePageContainer>
            : <Spinner />

          }

            </>
    )
}

  const mapDispatchToProps = dispatch => ({
    addWatched: result => dispatch(addWatched(result)),
    addFavorites: result => dispatch(addFavorites(result)),
    clearFromFavorites: movie => dispatch(clearMovieFromFavorites(movie)),
    clearFromWatched: movie => dispatch(clearMovieFromWatched(movie))
  });

  const mapStateToProps = createStructuredSelector({
    favorites: selectFavorites,
    watched: selectWatched
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MoviePage));