import * as React from 'react';
import {ICardBody} from "./types";

const CardBody: React.FunctionComponent<ICardBody> = props => (
    <div>{props.children}</div>
);

export default CardBody;
