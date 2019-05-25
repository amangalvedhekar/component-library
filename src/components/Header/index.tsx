import React from "react";

export interface IHeaderProps {
    size: number;
    children: React.ReactNode;

}

//@ts-ignore
const sizeArray = [...Array(6).keys()]
    .map(number => Object.assign({[number + 1]: `h${number + 1}`}));
