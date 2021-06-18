import React, { useState } from 'react';
import { withRouter } from 'react-router';

import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { addQueryResults, addQueryInfo } from '../../redux/movies/movies.actions';

import { fetchData } from '../../global/utils';

import {
    SearchFormContainer
} from './search-form.styles';


const SearchForm = ({history, addQueryResults, addQueryInfo}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [apiKey] = useState('e45ac1ce50026e393e410d2e2e194418')

    const handleSubmit = event => {
        event.preventDefault();
        fetchData(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&page=1&include_adult=false`)
        .then(response => {
            response.query = searchQuery;
            addQueryResults(response.results);
            addQueryInfo(response);
            history.push('/movies');
         })
    }

    const handleChange = event => {
        setSearchQuery(event.target.value)
    }


    return (
        <SearchFormContainer onSubmit={handleSubmit}>
            <FormInput 
                type='text'
                name='search'
                // value={search}
                required
                onChange={handleChange}
                placeholder='Search'
            />
            
            <CustomButton type='submit'>Search</CustomButton>

        </SearchFormContainer>
)}

const mapDispatchToProps = dispatch => ({
    addQueryResults: results => dispatch(addQueryResults(results)),
    addQueryInfo: results => dispatch(addQueryInfo(results)),
});


export default withRouter(connect(null, mapDispatchToProps)(SearchForm));

