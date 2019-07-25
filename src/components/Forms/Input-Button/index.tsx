import React from "react";
import {TextInput} from "../Elements/Input";
import styled from "styled-components";
import Button from "../../Buttons/";

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
  flex-direction:row;
  border:1px solid grey;
`;

const StyledInput = styled(TextInput)`
     flex-grow:3;
     border:none;
     :focus {
        outline: none;
    }
`;

const StyledButton = styled(Button)`
  background: #f32e5b;
  color:white;
  padding: 0px;
  @media (min-width: 1024px) {
    width: 10%
  }
   @media (max-width: 640px) {
    width: 30%
  }
  margin: 0;
  border: 0;
  border-radius: 0;
  
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
