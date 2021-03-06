import * as React from 'react';
import styled from 'styled-components';

export interface ILinkInterface {
    fontSize?: string;
    fontWeight?: string;
    children?: React.ReactNode;
    href?: string;
    color?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
    onClick?: (e: any) => void;
}

const StyledLink = styled.a`
    text-decoration: none;
    :hover,
    :focus,
    :active {
        text-decoration: underline;
    }
    font-size: ${(props: ILinkInterface) => props.fontSize ? props.fontSize : "large"};
    font-weight: ${(props: ILinkInterface) => props.fontWeight ? props.fontWeight : "normal" };
    color: ${(props: ILinkInterface) => props.color ? props.color : "blue"};
`;

export const Link: React.FunctionComponent<ILinkInterface> = props =>
    (
        <StyledLink {...props}>
            {props.children}
        </StyledLink>
    );

Link.defaultProps = {
    target: "_self",
    href: "#"
};
