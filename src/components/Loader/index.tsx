import React from 'react'
import styled, { keyframes } from 'styled-components'

const Bounce = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`;

const StyledDotsLoader = styled.div`
    display: inline-block;
`;

const Dot = styled.span`
    width: ${(props: any) => (props.big ? '20px' : '12px')};
    height: ${(props: any) => (props.big ? '20px' : '12px')};
    background-color: ${(props: any) => (props.white ? '#FFF' : '#000')};
    border-radius: 100%;
    display: inline-block;
    animation: ${Bounce} 1s infinite ease-in-out both;
`;

const Loader = (props: any) => {
    return (
        <StyledDotsLoader {...props}>
            <Dot {...props} style={{}} />
            <Dot {...props} style={{}} />
            <Dot {...props} style={{}} />
        </StyledDotsLoader>
    )
};

export default Loader;