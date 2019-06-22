import React from 'react';
import styled from 'styled-components';
import Loader from "../Loader";

export interface ICardProps {
    isLoading: boolean;
    children: React.ReactNode | string;
}

const StyledCard = styled.div`
    padding: 8px;
    box-shadow: 0 5px 15px -5px rgba(10, 10, 10, 1);
`;

const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = (props: ICardProps) => (
    <StyledCard {...props}>
        {props.isLoading ? <CenteredDiv><Loader small/></CenteredDiv> : props.children}
    </StyledCard>
);

export default Card;
