import React from 'react';
import { withRouter } from 'react-router-dom';

import MovieCard from '../../components/movie-card/movie-card.component';
import Spinner from '../../components/spinner/spinner.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import CustomInformation from '../../components/custom-information/custom-information.component';

import './movie.styles.scss';


class MoviePage extends React.Component {
  state = {
    API_KEY: 'da814607',
    result: null,
    remember: false,
    retrievedResults: null,
}

  componentDidMount(){
    const { API_KEY } = this.state;

    fetch(`https://www.omdbapi.com/?i=${this.props.match.params.movieId}&apikey=${API_KEY}`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
          this.setState({
            result: response,
            remember: true
          })
        })
        .catch(({error}) => {
            this.setState({
                loading: false,
                error: error,
            });
        })
  }

  render(){
    const {result} = this.state;
    const {history} = this.props;

    return(
            <div className="movie-page">              
              {
                result ? <MovieCard movie={result} /> : null
              }

              <div className="movie-details-container">
                {
                  result ? 
                  <div className='movie-details'>
                    <CustomButton
                inverted
                naked
                onClick={() => history.goBack()}
            >
                Go Back
            </CustomButton>
                    {
                      result.Plot !== 'N/A' ?
                      <CustomInformation 
                        information={result.Plot}
                        classname='movie-detail movie-plot'
                      />
                      : null
                    }
                    {
                      result.Director !== 'N/A' ? 
                      <CustomInformation 
                        title='Director:'
                        information={result.Director}
                        classname='movie-detail movie-plot'
                      />
                      : null
                    }
                    {
                      result.Writer !== 'N/A' ? 
                      <CustomInformation 
                        title='Writers:'
                        information={result.Writer}
                        classname='movie-detail movie-plot'
                      />
                      : null
                    }
                    {
                      result.Actors !== 'N/A' ? 
                      <CustomInformation 
                        title='Actors:'
                        information={result.Actors}
                        classname='movie-detail movie-plot'
                      />
                      : null
                    }
                    {
                      result.Awards !== 'N/A' ? 
                      <CustomInformation 
                        title='Awards:'
                        information={result.Awards}
                        classname='movie-detail movie-plot'
                      />
                      : null
                    }
                    {
                      result.Ratings !== 'N/A' ? 
                      <div className="movie-detail movie-ratings">
                        Ratings:
                        {
                          result.imdbRating ? 
                          <CustomInformation 
                            title='IMDb rate:'
                            information={result.imdbRating}
                            classname='imdb-rate'
                          />
                          : null
                        }
                        {
                          result.Ratings.map((rating, index) => 
                            <CustomInformation 
                              key={index}
                              title={rating.Source}
                              information={rating.Source}
                              classname='rating'
                            />
                          )
                        }
                      </div>
                      : null
                    }
                    
                  </div>
                  : <Spinner />
                }

                <div className="cta-container">
                  <CustomButton
                  classname='movie-button'
                  inverted
                  >
                    Add to Favorites
                  </CustomButton>

                  <CustomButton
                  classname='movie-button'
                  inverted
                  >
                    Want to see
                  </CustomButton>

                  <CustomButton
                  classname='movie-button'
                  inverted
                  >
                    Mark as watched
                  </CustomButton>
              </div>
              </div>
            </div>
        )
    }
  }


export default withRouter(MoviePage);