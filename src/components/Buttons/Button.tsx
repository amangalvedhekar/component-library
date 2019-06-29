import React from 'react'
import styled from 'styled-components'
import Loader from '../Loader';

export interface IButtonProps {
    children: React.ReactNode | string;
    disabled: boolean;
    color?: string;
    onClick?: (e: any) => void;
    loading: boolean;
}

const StyledButton = styled.button`
    width: 100%;
    border-radius: 5px;
    background-color: ${(props: IButtonProps) => props.color ? props.color : "#fff"};
    opacity: ${(props: IButtonProps) => (props.disabled || props.loading) ? "0.5" : undefined};
    color: #000;
    padding: 16px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: ${(props: IButtonProps) => (props.disabled || props.loading) ? "not-allowed" : "pointer"};
    margin: 16px;
    border: 2px solid ${(props: IButtonProps) => props.color ? props.color : "#0075be"};
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