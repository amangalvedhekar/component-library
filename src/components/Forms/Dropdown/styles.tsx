import React from "react";
import styled from "styled-components";
import {List, StyledUl} from "../../List";
import Button from "../../Buttons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown, faAngleUp, faCheck,} from '@fortawesome/free-solid-svg-icons';


export const StyledList = styled(StyledUl)`
    width: 100%;
    border: 1px solid grey;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    margin-top: 0;
    padding: 0;
    text-align: left;
`;

export const StyledListElement = styled(List)`
    cursor: pointer;
    :active,
    :focus, 
    :hover {
        color: white;
        background-color: #0075be;
    }
`;

export const StyledButton = styled(Button)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;

export const AngleButton = (angleType: any) => {
   //@ts-ignore
    const angleObject = {
        up: faAngleUp,
        down: faAngleDown
    };
    //@ts-ignore
    const angle = angleObject[angleType];
    return (
        <FontAwesomeIcon
            size={"2x"}
            color={"#0075be"}
            icon={angle}
        />
    )
};
