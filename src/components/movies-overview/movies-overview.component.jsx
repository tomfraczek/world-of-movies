import React from 'react';

import MovieCard from '../movie-card/movie-card.component';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './movies-overview.styles.scss';
import Spinner from '../spinner/spinner.component';


class MoviesOverview extends React.Component {
    constructor(){
        super();

        this.state = {
            API_KEY: 'da814607',
            search: '',
            results: null,
            loading: false,
            error: null,
            yearAsc: false,
            titleAsc: false,
            typeAsc: false,
            totalResults: null,
            currentPage: 1,
        }
    }

    componentDidMount(){
        const retrievedResults = localStorage.getItem('results');
        const retrievedResultsJson = JSON.parse(retrievedResults)
        if(retrievedResultsJson){
            this.setState({
                results: retrievedResultsJson,
                search: localStorage.getItem('searchQuery'),
            })
        }
    }

    handleChange = event => {
        this.setState({
            search: event.target.value,
        });
    }

    handleClick = () => {
        this.setState({
            search: '',
        })
    }

    fetchData = (url, currentPage) => {
        this.setState({
            loading: true,
            error: null,
            results: null,
            currentPage: currentPage,
        });

        fetch(url)
        .then(resp => resp)
        .then(resp => resp.json())
        .then(response => {
            if (response.Response === 'False') {
                console.log(response.Error);
                this.setState({error: response.Error})
            }
            else {
                this.setState({
                    results: response.Search,
                    error: null
                })
                this.setState({totalResults: response.totalResults})
                localStorage.setItem('results', JSON.stringify(this.state.results));
                localStorage.setItem('searchQuery', this.state.search)
            }

            this.setState({loading: false})
        })
        .catch(({message}) => {
            console.log(message)
            this.setState({
                loading: false,
                error: message,
            });
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { search, API_KEY } = this.state;

        this.fetchData(`https://www.omdbapi.com/?s=${search}&apikey=${API_KEY}`);
    }

    sortByYear = () => {
        this.setState({yearAsc: !this.state.yearAsc})
        const sorted = this.state.yearAsc ? this.state.results.sort((a, b) => a.Year - b.Year) : this.state.results.sort((a, b) => b.Year - a.Year);
        this.setState({results: sorted})
    }

    sortByTitle = () => {
        this.setState({titleAsc: !this.state.titleAsc})
        const sorted = this.state.titleAsc ? this.state.results.sort((a, b) => a.Title.localeCompare(b.Title)) : this.state.results.sort((a, b) => b.Title.localeCompare(a.Title));
        this.setState({results: sorted})
    }

    sortByType = () => {
        this.setState({typeAsc: !this.state.typeAsc})
        const sorted = this.state.typeAsc ? this.state.results.sort((a, b) => a.Type.localeCompare(b.Type)) : this.state.results.sort((a, b) => b.Type.localeCompare(a.Type));
        this.setState({results: sorted})
    }

    resetSearch = () => {
        this.setState({
            search: '',
            results: null,
            totalResults: 0,
        })
        localStorage.clear();
    }

    handlePagination = event => {
        const { search, API_KEY } = this.state;
        
        this.fetchData(`http://www.omdbapi.com/?s=${search}&apikey=${API_KEY}&page=${event.target.id}`, event.target.id)
      }

      
            render(){
                const { search, results, error, loading, totalResults, currentPage } = this.state;
                const pageNumbers = [];
                for (let i = 0; i < Math.floor(totalResults / 10); i++) {
                    pageNumbers.push(i+1)      
                }

                const renderPageNumbers = pageNumbers.map(number => (
                    <li
                        key={number}
                        id={number}
                        onClick={this.handlePagination}
                        className={number === currentPage ? 'active' : null}
                      >
                        {number}
                      </li>
                ));

                return(
                    <div className="movies-overview">
                        <form className='search-form' onSubmit={this.handleSubmit}>
                            <FormInput 
                                type='text'
                                name='search'
                                value={search}
                                onChange={this.handleChange}
                                placeholder='Search'
                            />
                            
                            <CustomButton type='submit'>Search</CustomButton>

                            {
                                search ?
                                <CustomButton 
                                className='remove-search'
                                onClick={this.handleClick}
                            >
                                &#x2715;
                                </CustomButton>
                                : null
                            }
                        </form>

                        {
                            results && !error ?
                            <div className="search-options">
                                <div className="filters">
                                    <span>Sort by:</span>
                                    
                                    <div className="sort-dropdown">
                                        <span onClick={this.sortByTitle}>Title</span>
                                        <span onClick={this.sortByType}>Type</span> 
                                        <span onClick={this.sortByYear}>Year</span>
                                    </div>
                                </div> 
                        
                        
                                <CustomButton 
                                    type='button'
                                    onClick={this.resetSearch}
                                    inverted
                                    naked
                                    classname='movies-overview-reset'
                                >
                                    Reset
                                </CustomButton>
                            </div> 
                            : null
                        }

                        <div className="results-view">
                            {
                                loading ? <Spinner /> : null
                            }

                            {
                                results && !error ? results.map(movie => 
                                    <MovieCard key={movie.imdbID} movie={movie} />) 
                                : 
                                error ?
                                <p className='error-message'>{error}</p>
                                : null
                            }

                            {
                                !results && !loading ? <p className='movies-welcome-message'>Use the search bar above to find a movie</p> : null
                            }
                        </div>

                        {
                            totalResults > 10 ? 
                                <div className='pagination'>
                                    <ul>
                                        {renderPageNumbers}
                                    </ul>
                                </div>
                            : null
                        }
                    </div>
                )
            }
}



export default MoviesOverview;