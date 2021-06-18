import React from 'react';

import Pager from '@material-ui/lab/Pagination';

import {
    PaginationContainer
} from './pagination.styles';

const Pagination = ({pages, handleChange}) => {
    return(
        <PaginationContainer>
            <Pager count={pages} shape="rounded" onChange={handleChange}/> 
        </PaginationContainer>
)}


export default Pagination;