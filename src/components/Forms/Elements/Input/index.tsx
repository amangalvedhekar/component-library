import React from "react";
import styled from 'styled-components';

export interface ITextInput {
    placeholder: string;
    onChange?: (e: React.SyntheticEvent) => void;
    onKeyDown?: (e: React.SyntheticEvent) => void;
    value?: any;
    role?: string;
}

const StyledInput = styled.input`
  width: 100%;
  border-radius: 20px;
  padding: 8px;
`;

export const TextInput = ({placeholder, ...props}: ITextInput) => (
    <StyledInput
        type={"text"}
        placeholder={placeholder}
        aria-label={placeholder}
        {...props}
    />
);
