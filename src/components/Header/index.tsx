import React from "react";
import styled from 'styled-components';

export interface IHeaderProps {
    size: "1" | "2" | "3" | "4" | "5" | "6";
    children: React.ReactNode;
    fontWeight?: string;
    tabIndex?: string;
}

//@ts-ignore
const fontSizes = [...Array(6).keys()]
    .map(num => `h${num + 1}`);
//@ts-ignore
const headingStyle = fontSizes
    .reduce((acc, elm) => Object
        .assign(
            acc,
            //@ts-ignore
            {[elm]: styled(elm)``}
        ), {});

const SectionHeading = ({size, children, ...props}: IHeaderProps) => {
    //@ts-ignore
    const Component = headingStyle[`h${size}`];
    // @ts-ignore
    return <Component {...props}>{children}</Component>
};

export default SectionHeading;
