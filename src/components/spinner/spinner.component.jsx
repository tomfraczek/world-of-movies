import React from 'react';

import {
    SpinnerOverlay,
    SpinnerContainer
} from './'

import './spinner.styles.scss';

const Spinner = () => (
    <SpinnerOverlay>
        <SpinnerContainer/>
    </SpinnerOverlay>
)

export default Spinner;