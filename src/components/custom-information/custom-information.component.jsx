import React from 'react';

const CustomInformation = ({title, information, classname}) => (
    <div className={classname}>
        {title ? <b>{title} </b> : null}
        {information ? <span>{information}</span> : null}
    </div>
)

export default CustomInformation;