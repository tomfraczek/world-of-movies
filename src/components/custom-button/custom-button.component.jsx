import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({
    children, 
    isGoogleSignIn, 
    inverted, 
    naked,
    ...otherProps
    }) => (
    <button 
    className={`${inverted ? 'inverted' : ''} ${naked ? 'btn-naked' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;