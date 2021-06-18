import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSearchResults, selectSearchInfo } from '../../redux/movies/movies.selectors';

import SearchForm from '../../components/search-form/search-form.component';
import Notification from '../../components/notification/notification.component';

const SearchPage = ({results, searchInfo}) => (
    <>
        <SearchForm />
        {console.log(searchInfo)}
        {
            results === [] ? <Notification content='Nothing to show' /> : null
        }
    </>
)

const mapStateToProps = createStructuredSelector({
    results: selectSearchResults,
    searchInfo: selectSearchInfo,
  })

export default connect(mapStateToProps)(SearchPage);