import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    padding: 16px;
    box-shadow: 0 5px 15px -5px rgba(10, 10, 10, 1);
`;

const Card = (props: any) => (
    <StyledCard {...props}>
        {props.children}
    </StyledCard>
);

export default Card;
