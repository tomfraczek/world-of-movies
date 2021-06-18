import React, { useState } from 'react';
import { withRouter } from 'react-router';

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectSearchResults } from '../../redux/movies/movies.selectors';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import Notification from '../notification/notification.component';

import { addQueryResults, addQueryInfo } from '../../redux/movies/movies.actions';

import { fetchData } from '../../global/utils';

import {
    SearchFormContainer
} from './search-form.styles';


const SearchForm = ({history, addQueryResults, addQueryInfo, results}) => {
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

    // const NoResults = () => {
    //     if(results.length && searchQuery !== ''){
    //         return <Notification content='No results, try searching a different fraze' />
    //     }

    //     return null;
    // }


    return (
        <SearchFormContainer onSubmit={handleSubmit}>
            <FormInput 
                type='text'
                name='search'
                required
                onChange={handleChange}
                placeholder='Search'
            />
            {/* <NoResults /> */}
            
            <CustomButton type='submit'>Search</CustomButton>

        </SearchFormContainer>
)}

const mapDispatchToProps = dispatch => ({
    addQueryResults: results => dispatch(addQueryResults(results)),
    addQueryInfo: results => dispatch(addQueryInfo(results)),
});

const mapStateToProps = createStructuredSelector({
    results: selectSearchResults,
  })


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));

