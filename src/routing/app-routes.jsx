import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Header from '../components/header/header.component';
import Homepage from '../pages/homepage/homepage.component';
import MoviesPage from '../components/movies-overview/movies-overview.component';
import MoviePage from '../pages/movie/movie.component'
import Favorites from '../pages/favorites/favorites.component';
import Watched from '../pages/watched/watched.component';
import Search from '../pages/search/search.component';

import { RouteUrl } from './route-url';

import { AppContainer } from './app-routes.styles'

export const AppRoutes = () => (
  <AppContainer>
      <Header />
      <Switch>
        <Route path={RouteUrl.home} exact component={Homepage} />
        <Route path={RouteUrl.movies} exact component={MoviesPage} />
        <Route path={RouteUrl.movie} exact component={MoviePage}/>
        <Route path={RouteUrl.search} exact component={MoviesPage}/>
        <Route path={RouteUrl.favorites} exact component={Favorites}/>
        <Route path={RouteUrl.watched} exact component={Watched}/>
        <Redirect to={RouteUrl.home} />
      </Switch>
    </AppContainer>
);

// <Route exact path={`${match.path}`} component={MoviesOverview}/>
// <Route path={`${match.path}/:movieId`} component={MoviePage}/>