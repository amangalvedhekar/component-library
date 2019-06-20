import React from "react";
import styled from 'styled-components';

//ToDo: support and border setting based on props  -> isError
export interface ITextInput {
    placeholder: string;
    value?: any;
    role?: string;
    type?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.SyntheticEvent) => void;
}

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
`;

export const TextInput = ({placeholder,type, ...props}: ITextInput) => (
    <StyledInput
        type={type}
        placeholder={placeholder}
        aria-label={placeholder}
        {...props}
    />
);
