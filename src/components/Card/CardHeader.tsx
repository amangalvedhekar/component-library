import * as React from 'react';
import styled from 'styled-components';
import {ICardHeader} from "./types";

const StyledHeader = styled.h2`
    background-color: ${(props: ICardHeader) => props.backgroundColor ? props.backgroundColor : 'blue'};
    color: ${(props: ICardHeader) => props.color ? props.color : '#fff'};
    margin: ${(props: ICardHeader) => props.margin ? props.margin : 0};
    text-align:${(props: ICardHeader)=> props.textAlign};
    padding: 20px;
`;

const CardHeader: React.FunctionComponent<ICardHeader> = props => (
    <StyledHeader
        backgroundColor={props.backgroundColor}
        color={props.color}
        margin={props.margin}
        textAlign={props.textAlign}
    >
        {props.text}
    </StyledHeader>
);

export default CardHeader;
