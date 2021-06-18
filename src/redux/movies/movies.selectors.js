import { createSelector } from 'reselect';

const selectMovies = state => state.movies;

export const selectPopularMovies = createSelector(
  [selectMovies],
  movies => movies.popular ? movies.popular : []
)

export const selectIsMoviesFetching = createSelector(
  [selectMovies],
  movies => movies.isFetching
);

export const selectIsMoviesLoaded = createSelector(
  [selectMovies],
  movies => !!movies.popular
);

export const selectSearchInfo = createSelector(
  [selectMovies],
  movies => movies.searchInfo ? movies.searchInfo : []
)

export const selectSearchResults = createSelector(
  [selectMovies],
  movies => movies.searchResults ? movies.searchResults : []
)

export const selectAllProducts = createSelector(
  [selectMovies],
  movies => movies.popular
)

export const selectFavorites = createSelector(
  [selectMovies],
  movies => movies.favorites
)

export const selectWatched = createSelector(
  [selectMovies],
  movies => movies.watched
)