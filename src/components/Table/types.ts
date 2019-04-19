export interface ITableProps {
    title: string;
    tableStyle: Object;
    headStyle: Object;
    headData: IHeadData[];
    bodyData: IBodyData[];
}

export interface IHeadData {
    title: string;
}

export interface IBodyData {
    symbol: string;
    exchange: string;
    price: string;
    yield: string;
    div: string;
}
