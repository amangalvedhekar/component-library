import React from "react";
import styled from 'styled-components';
import {borderType, getBorderForListItem} from "../List";

export interface IImageProps {
    src: string;
    alt: string;
    borderType: borderType
}

const Image = styled.img`
    max-width: 100%;
     ${(props: IImageProps) => getBorderForListItem(props.borderType)};
    padding: 1px;
`;

export const StyledImage: React.FunctionComponent<IImageProps> = props => (
    <Image src={props.src} alt={props.alt} {...props}/>
);
