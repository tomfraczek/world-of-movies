import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { 
  sortByTitle ,
  sortByPopularity
} from '../../redux/movies/movies.actions';
import { selectSearchResults } from '../../redux/movies/movies.selectors';

import {
  FormContainer,
} from './sort-results.styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SortResults = ({searchResults, sortByTitle, sortByPopularity}) => {
  const classes = useStyles();
  const [sort, setSort] = useState('');
  
  const handleChange = (event) => {
    setSort(event.target.value);
    const value = event.target.value;
    if(value === 'popularity'){
      sortByPopularity(searchResults);
    }else if(value === 'title'){
      sortByTitle(searchResults);
    }
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sort}
          onChange={handleChange}
        >
          <MenuItem value={'popularity'}>Popularity</MenuItem>
          <MenuItem value={'title'}>Title</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  searchResults: selectSearchResults,
});

const mapDispatchToProps = dispatch => ({
  sortByTitle: results => dispatch(sortByTitle(results)),
  sortByPopularity: results => dispatch(sortByPopularity(results))
});

export default connect(mapStateToProps, mapDispatchToProps)(SortResults);