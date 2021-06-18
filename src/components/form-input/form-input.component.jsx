import React from 'react';

import {
    FormInputContainer,
    FormInputElement,
    Label
} from './form-input.styles';

const FormInput = ({handleChange, label, ...otherProps}) => (
    <FormInputContainer>
        <FormInputElement onChange={handleChange} {...otherProps} />
        {label ? 
        <Label>
            {label}
        </Label> 
        : null
        }

    </FormInputContainer>
)

export default FormInput;