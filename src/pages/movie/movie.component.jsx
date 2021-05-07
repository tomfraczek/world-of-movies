import React from 'react';
import { Link, withRouter, Route } from 'react-router-dom';

import MovieCard from '../../components/movie-card/movie-card.component';
import Spinner from '../../components/spinner/spinner.component';

import './movie.styles.scss';


class MoviePage extends React.Component {
  constructor(){
      super();

      this.state = {
          API_KEY: 'da814607',
          result: null,
          remember: false,
          retrievedResults: null,
      }
  }

  componentDidMount(){
    const { search, API_KEY } = this.state;

        //TODO: WORK ON THE SPINNER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

        // this.setState({
        //     loading: true,
        //     error: null,
        //     result: null
        // });
        fetch(`http://www.omdbapi.com/?i=${this.props.match.params.movieId}&apikey=${API_KEY}`)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
          console.log(response)
          this.setState({
            result: response,
            remember: true
          })

          // localStorage.setItem('result', JSON.stringify(response));
          // console.log(localStorage.getItem('result'))
          // console.log(JSON.parse(localStorage.getItem('result')))
            // this.setState({loading: false})
        })
        .catch(({message}) => {
            this.setState({
                // loading: false,
                error: message,
            });
        })
  }

  render(){
    const {result} = this.state;
    // const retrievedResults = localStorage.getItem('result');
    // const retrievedResultsJson = JSON.parse(retrievedResults)
    // console.log(retrievedResultsJson);

    return(
            <div className="movie-page">
              
              {
                result ? <MovieCard movie={result} /> : null
              }

              <div className="movie-details-container">
                {
                  result ? 
                  <div className='movie-details'>
                    {
                      result.Plot != 'N/A' ?
                      <div className="movie-detail movie-plot">
                        <span>{result.Plot}</span>
                      </div>
                      : null
                    }
                    {
                      result.Director != 'N/A' ? 
                      <div className='movie-detail movie-director'>
                        <span>Director: </span>
                        <span>{result.Director}</span>
                      </div>
                      : null
                    }
                    {
                      result.Writer != 'N/A' ? 
                      <div className='movie-detail movie-writers'>
                        <span>Writers: </span>
                        <span>{result.Writer}</span>
                      </div>
                      : null
                    }
                    {
                      result.Actors != 'N/A' ? 
                      <div className="movie-detail movie-actors">
                        <span>Actors: </span>
                        <span>{result.Actors}</span>
                      </div>
                      : null
                    }
                    {
                      result.Awards != 'N/A' ? 
                      <div className="movie-detail movie-awards">
                        <span>Awards: </span>
                        <span>{result.Awards}</span>
                      </div>
                      : null
                    }
                    {
                      result.Ratings != 'N/A' ? 
                      <div className="movie-detail movie-ratings">
                        Ratings:
                        {
                          result.imdbRating ? 
                          <div className="imdb-rate">
                            <span>IMDb rate: </span>
                            <span>{result.imdbRating}</span>
                          </div>
                          : null
                        }
                        {
                          result.Ratings.map((rating, index) => 
                            <div key={index} className="rating">
                              <span>{rating.Source}: </span>
                              <span>{rating.Value}</span>
                            </div>
                          )
                        }
                      </div>
                      : null
                    }
                    
                  </div>
                  : <Spinner />
                }
              </div>
            </div>
        )
    }
  }


export default withRouter(MoviePage);