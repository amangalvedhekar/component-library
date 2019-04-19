import * as React from 'react';
import { tableRowColored, tableRowDefault } from "./styles";
import { ITableProps } from "./types";

const Table: React.FunctionComponent<ITableProps> = props => (
    <table style={props.tableStyle}>
        <title>{props.title}</title>
        <thead style={props.headStyle}>
        <tr>
            {props.headData.map((elm: any, idx: number) => (
                <th
                    key={idx}
                    scope={"col"}
                    style={{backgroundColor: "gray", color: "white"}}
                >
                    {elm.title}
                </th>
            ))
            }
        </tr>
        </thead>
        <tbody>
        {props.bodyData.map((elm: any, idx: number) => (
            <tr key={idx}
                // @ts-ignore
                style={(idx+1)%2 === 0 ? tableRowColored : tableRowDefault}>
                <th scope={"row"}>{elm.symbol}</th>
                <td>{elm.exchange}</td>
                <td>{elm.price}</td>
                <td>{elm.yield}</td>
                <td>{elm.div}</td>
            </tr>))}
        </tbody>
    </table>
);

export default Table;