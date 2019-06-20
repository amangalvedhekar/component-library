import React from 'react'
import styled from 'styled-components'
import Loader from '../Loader';

export interface IButtonProps {
    children: React.ReactNode;
    disabled: boolean;
    onClick?: (e: any) => void;
    loading: boolean;
}

const StyledButton = styled.button`
    border-radius: 5px;
    background-color: #0075be;
    opacity: ${(props: IButtonProps) => (props.disabled || props.loading) ? "0.5" : undefined};
    color: #fff;
    padding: 16px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: ${(props: IButtonProps) => (props.disabled || props.loading) ? "not-allowed" : "pointer"};
    margin: 16px;
    border: 2px solid #0075be;
`;

const Button: React.FunctionComponent<IButtonProps> = (
    {
        loading,
        children,
        disabled,
        ...props
    }) => (
    <StyledButton
        disabled={disabled}
        loading={loading}
        aria-disabled={disabled}
        {...props}
    >
        {loading ? <Loader small/> : children}
    </StyledButton>
);

export default Button