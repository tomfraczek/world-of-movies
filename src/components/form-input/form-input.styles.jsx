import styled from 'styled-components';

export const FormInputContainer = styled.div`
    position: relative;
    width:100%;
`;

export const FormInputElement = styled.input`
    background: none;
    background-color: white;
    color: #010101;
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid #010101;

    &:focus {
    outline: none;
    }

    &:focus ~ .form-input-label {
    @include shrinkLabel();
    }

    &[type='password'] {
        letter-spacing: 0.3em;
    }
`;

export const Label = styled.label`
    color: grey;
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    &.shrink {
        top: -14px;
        font-size: 12px;
        color: black;
    }
`;