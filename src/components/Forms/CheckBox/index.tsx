import React from "react";
import styled from "styled-components";

export interface ICheckboxProps {
    name: string;
    labelname: string;
    checked: boolean;
    onChange? : (e: any) => void;
    defaultChecked? : boolean;
}

const StyledLabel = styled.label`
    padding: 8px;
`;

const Checkbox: React.FunctionComponent<ICheckboxProps> = props => (
    <React.Fragment>
        <input type="checkbox" {...props} id={props.name} checked={props.checked} onChange={props.onChange}/>
        <StyledLabel htmlFor={props.name}>
            {props.labelname}
        </StyledLabel>
    </React.Fragment>
);

export default Checkbox;