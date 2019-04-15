import * as React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
    border: 2px solid blue;
`;

const StyledTr = styled.tr`
     border: 2px solid blue;
`;

const StyledThead = styled.thead`
     border: 2px solid blue;
`;

const StyledTbody = styled.tbody`
    border: 2px solid blue;
`;

const StyledTd = styled.td`
    border: 2px solid blue;
`;

const StyledTh = styled.th`
    border: 2px solid blue;
`;

const Table = (props: any) => (
    <StyledTable>
        <StyledThead>
            <StyledTr>
                <StyledTh>1st</StyledTh>
                <StyledTh>2nd</StyledTh>
                <StyledTh>3rd</StyledTh>
            </StyledTr>
        </StyledThead>
        <StyledTbody>
            <StyledTr>
                <StyledTd>one</StyledTd>
                <StyledTd>two</StyledTd>
                <StyledTd>three</StyledTd>
            </StyledTr>
        </StyledTbody>
    </StyledTable>
);

export default Table;