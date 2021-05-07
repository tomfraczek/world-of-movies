import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import MoviesPage from './pages/movies/movies.component';

import './global/global-css.scss';

const App = () => (
  <div className='container'>
      <Header />
        <Switch>
          <Route exact path='/' component={Homepage} /> 
          <Route path='/movies' component={MoviesPage} /> 
        </Switch>
    </div>
)

export default App;
