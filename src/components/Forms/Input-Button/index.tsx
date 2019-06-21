import React from "react";
import {TextInput} from "../Elements/Input";
import styled from "styled-components";
import Button from "../../Buttons/Button";

export interface IInputButtonProps {
    placeholder: string;
    buttonText: string;
    isDisabled: boolean;
    isLoading: boolean;
    type: string;
    value?: string;
    onClick?: (e: any) => void;
    onChange?: (e: any) => void;
}

const Wrapper = styled.div`
  display:flex;
`;

const StyledInput = styled(TextInput)`
    flex : 1;
`;

const StyledButton = styled(Button)`
  border:1px solid #f32e5b;
  background: #f32e5b;
  color:white;
  margin: 0;
`;

const InputButton: React.FunctionComponent<IInputButtonProps> = props => (
    <Wrapper>
        <StyledInput
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
            {...props}
        />
        <StyledButton
            disabled={props.isDisabled}
            loading={props.isLoading}
            onClick={props.onClick}
        >
            {props.buttonText}
        </StyledButton>
    </Wrapper>
);

export default InputButton;
