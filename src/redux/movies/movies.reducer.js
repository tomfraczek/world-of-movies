import MoviesActionTypes from './movies.types';
import { addMovieToList, removeMovieFromList, sortByDate, sortByTitle, sortByPopularity } from './utils';

const INITIAL_STATE = {
  popular: null,
  searchResults: null,
  searchInfo: null,
  isFetching: false,
  errorMessage: undefined,
  favorites: [],
  watched: [],
};

const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        isFetching: true
      };
    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        popular: action.payload
      };
    case MoviesActionTypes.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    case MoviesActionTypes.ADD_QUERY_RESULTS:
      return{
        ...state,
        searchResults: action.payload
      }
    case MoviesActionTypes.ADD_QUERY_INFO:
      return{
        ...state,
        searchInfo: action.payload
      }
    case MoviesActionTypes.ADD_WATCHED:
      return{
        ...state,
        watched: addMovieToList(state.watched, action.payload)
      }
    case MoviesActionTypes.ADD_FAVORITES:
      return{
        ...state,
        favorites: addMovieToList(state.favorites, action.payload)
    }
    case MoviesActionTypes.CLEAR_FROM_FAVORITES:
      return {
        ...state,
        favorites: removeMovieFromList(state.favorites, action.payload)
    }
    case MoviesActionTypes.CLEAR_FROM_WATCHED:
      return {
        ...state,
        watched: removeMovieFromList(state.watched, action.payload)
    }
    case MoviesActionTypes.SORT_POPULAR:
      return{
        ...state,
        searchResults: sortByPopularity(state.searchResults)
      }
    case MoviesActionTypes.SORT_TITLE:
      return{
        ...state,
        searchResults: sortByTitle(state.searchResults)
      }
    default:
      return state;
  }
};

export default moviesReducer;