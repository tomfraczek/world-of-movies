import styled, { css } from 'styled-components';

const nakedButton = css`
    background: none;
    color: #010101;
    text-transform: uppercase;
    font-weight: bold;
    height: auto;
    padding: 0;

    &:hover{
        color: #010101;
        text-decoration: underline;
    }
`;

const  buttonStyles = css`
    background: #010101;
    color: #fff;
    border: 1px solid #010101;;

    &:hover{
        background: #fff;
        color: #010101;
    }
`;

const invertedButtonStyles = css`
    background: #fff;
    color: #010101;
    border: 1px solid #010101;

    &:hover{
        color: #fff;
        background: #010101;
    }
`;

const disabledButtonStyles = css`
    background: #9194A5;
    color: #fff;
    border: none;

    &:hover{
        background: #fff;
        border: 1px solid #9194A5;
        color: #9194A5
    }
`;

const nakedButtonStyles = css`
    ${nakedButton}
`;

const iconButtonStyles = css`
    ${nakedButton}
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width:30px;
    }
`;

const alertButtonStyles = css`
    background: red;
    color: #fff;
    border: 1px solid #010101;

    &:hover{
        background: #fff;
        color: red;
        border-color: red;
    }
`;

const getButtonsStyles = props => {
    if(props.disabled){
        return disabledButtonStyles;
    }else if(props.naked){
        return nakedButtonStyles;
    }else if(props.icon){
        return iconButtonStyles
    }else if(props.alert){
        return alertButtonStyles
    }

    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    box-sizing: border-box;
    height:38px;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    line-height: 38px;
    padding: 0 8px;
    text-decoration: none;
    margin-bottom: 8px;
    ${getButtonsStyles}

    &:hover{
        cursor: pointer;
        box-sizing: border-box;
    }
`;