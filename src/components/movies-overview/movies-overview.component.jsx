import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectSearchInfo, selectSearchResults } from '../../redux/movies/movies.selectors';
import { addQueryInfo, addQueryResults } from '../../redux/movies/movies.actions';

import { fetchData } from '../../global/utils';

import MovieCard from '../movie-card/movie-card.component';
import Pagination from '../pagination/pagination.component';
import SearchForm from '../search-form/search-form.component';
import SortResults from '../../components/sort-results/sort-results.component';



import {
    ResultsContainer,
} from './movies-overview.styles';


const MoviesOverview = ({searchInfo, searchResults, addQueryResults}) => {
    const [searchResult, setSearchResult] = useState({
        page: null,
        results: null,
        total_pages: null,
        total_results: null,
        query: ''
    });
    const [apiKey] = useState('e45ac1ce50026e393e410d2e2e194418')

    useEffect(() => {
        setSearchResult({
            page: searchInfo.page,
            results: searchResults,
            total_pages: searchInfo.total_pages,
            total_results: searchInfo.total_results,
            query: searchInfo.query
        })
    }, [searchResults]);

    const handleChange = (event, page) => {
        event.preventDefault();
        fetchData(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchInfo.query}&include_adult=false&page=${page}`)
        .then(response => {
            response.query = searchResult.query;
            addQueryResults(response.results);
            addQueryInfo(response);
         })
        
    }

    const RenderMovies = () => {
        if(searchResults){
            return searchResults.map(result => <MovieCard key={result.id} movie={result} />)
        }

        return null;
    }

    return (
        <>
            <SearchForm />
            <SortResults />
            <ResultsContainer>
                <RenderMovies />
            </ResultsContainer>
            <Pagination pages={searchResult.total_pages} handleChange={handleChange}/>
        </>
    )
}
  

const mapStateToProps = createStructuredSelector({
    searchInfo: selectSearchInfo,
    searchResults: selectSearchResults,
});

const mapDispatchToProps = dispatch => ({
    addQueryResults: results => dispatch(addQueryResults(results)),
    addQueryInfo: results => dispatch(addQueryInfo(results))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesOverview);