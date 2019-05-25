import React from "react";
import styled from 'styled-components';
import {Link} from "../Link";

// export interface IBadgeData {
//     text: string;
//     quantity: number;
//     url?: string;
// }
//
// export interface IList {
//     items: IBadgeData[]
// }
//
// export interface IListData {
//     item: IBadgeData;
//     isLast?: boolean;
// }

export const StyledSpan = styled.span`
    border: 2px solid grey;
    border-radius: 20px;
    padding: 6px;
`;
const Wrapper = styled(Link)`
    display: flex;
    align-items: center;
    border-top: 1px solid grey;
    border-right: 1px solid grey;
    border-left: 1px solid grey;
    border-bottom: ${ (props: any) => props.isLast ? "1px solid grey" : undefined};
    padding: 14px;
    color: #000;
    border-bottom-left-radius: ${(props: any) => props.isLast ? "10px" : undefined};
    border-bottom-right-radius: ${(props: any) => props.isLast ? "10px" : undefined};
    border-top-left-radius: ${(props: any) => props.isFirst ? "10px" : undefined};
    border-top-right-radius: ${(props: any) => props.isFirst ? "10px" : undefined};
`;

const TextWrapper = styled.div`
    flex: 3;
`;

const QuantityWrapper = styled.div`
    justify-content: flex-end;
`;

export const ListItem: React.FunctionComponent<any> = props =>
    (
        //@ts-ignore
        <Wrapper href={props.item.url} fontSize={"small"} isLast={props.isLast} isFirst={props.isFirst}>
            <TextWrapper>
                <span>
                    {props.item.text}
                </span>
            </TextWrapper>
            <QuantityWrapper>
                <StyledSpan>
                    {props.item.quantity}
                </StyledSpan>
            </QuantityWrapper>
        </Wrapper>
    );

export const List: React.FunctionComponent<any> = props =>
    props.items.map((elm: any, idx: number) => <ListItem item={elm} key={idx}
                                                                isLast={props.items.length - 1 === idx}
                                                                isFirst={idx === 0}/>);
