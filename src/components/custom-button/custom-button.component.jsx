import React from 'react';

import './custom-button.styles.scss'

const CustomButton = ({
    children, 
    isGoogleSignIn, 
    inverted, 
    naked,
    classname,
    ...otherProps
    }) => (
    <button 
    className={`${inverted ? 'inverted' : ''} ${naked ? 'btn-naked' : ''} ${classname ? classname : null} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;