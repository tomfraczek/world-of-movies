import MoviesActionTypes from './movies.types';

export const fetchMoviesStart = () => ({
  type: MoviesActionTypes.FETCH_MOVIES_START
});

export const fetchMoviesSuccess = movies => ({
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
  payload: movies
});

export const fetchMoviesFailure = errorMessage => ({
  type: MoviesActionTypes.FETCH_MOVIES_FAILURE,
  payload: errorMessage
});

export const addQueryResults = results => ({
  type: MoviesActionTypes.ADD_QUERY_RESULTS,
  payload: results
});

export const addQueryInfo = results => ({
  type: MoviesActionTypes.ADD_QUERY_INFO,
  payload: results
});

export const addWatched = result => ({
  type: MoviesActionTypes.ADD_WATCHED,
  payload: result
});

export const addFavorites = results => ({
  type: MoviesActionTypes.ADD_FAVORITES,
  payload: results
});

export const clearMovieFromFavorites = movie => ({
  type: MoviesActionTypes.CLEAR_FROM_FAVORITES,
  payload: movie
})

export const clearMovieFromWatched = movie => ({
  type: MoviesActionTypes.CLEAR_FROM_WATCHED,
  payload: movie
})

export const sortByTitle = movieList => ({
  type: MoviesActionTypes.SORT_TITLE,
  payload: movieList
})

export const sortByPopularity = movieList => ({
  type: MoviesActionTypes.SORT_POPULAR,
  payload: movieList
})


export const fetchMoviesStartAsync = () => {
  console.log('fetchMoviesStartAsync')
  return dispatch => {
    dispatch(fetchMoviesStart());

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=e45ac1ce50026e393e410d2e2e194418')
    .then(response => response.json())
    .then(data => {
      dispatch(fetchMoviesSuccess(data.results));
    })
    .catch(error => dispatch(fetchMoviesFailure(error.message)));
  };
};

