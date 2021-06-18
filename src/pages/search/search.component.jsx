import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSearchResults } from '../../redux/movies/movies.selectors';

import SearchForm from '../../components/search-form/search-form.component';
import Notification from '../../components/notification/notification.component';

const SearchPage = ({results}) => (
    <>
        <SearchForm />
        {
            results.length ? <Notification content='Nothing to show' /> : null
        }
    </>
)

const mapStateToProps = createStructuredSelector({
    results: selectSearchResults,
  })

export default connect(mapStateToProps)(SearchPage);