import React from "react";
import styled from 'styled-components';


export enum borderType {
    all = "all",
    bottom = "bottom",
    top = "top",
    none = "none"
}

export interface IList {
    children: React.ReactNode;
    data: string;
    tabIndex?: number;
    borderType: borderType;
    onClick?: (e: React.SyntheticEvent) => void;
    onKeyDown?: (e: any) => void;
}

export const StyledUl = styled("ul")`
    list-style: none;
`;
export const getBorderForListItem = (border : borderType | undefined) => {
    if (border === undefined) {
        border = borderType.none;
    }
    return {
        top: "border-top: 1px solid grey",
        bottom: "border-bottom: 1px solid grey",
        all: "border: 1px solid grey",
        none: "border: none"
    }[border];
};

const StyledLI: any = styled("li")`
    margin: 8px;
    ${(props: IList) => getBorderForListItem(props.borderType)};
    padding: 8px;
`;


export const List = ({children, data, borderType, ...props}: IList) => (<StyledLI
    borderType={borderType}
    {...props}
>
    {children}
</StyledLI>);

List.defaultProps = {
    borderType: "all"
};