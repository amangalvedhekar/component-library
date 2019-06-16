import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const animatedCss = css`
    opacity: 1;
    transform: translateY(0);
`;

const primaryCss = css`
    background-color: #008bf8;
    color: #fff;
`;

const StyledCard = styled.div`
    padding: 16px;
    transform: translateY(50px);
    transition: 500ms all ease-in-out;
    border: 1px solid;
    border-radius: 15px;
    :hover {
        box-shadow: 0 5px 15px -5px rgba(10, 10, 10, 1);
    }
`;

class Card extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            animated: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => {
                return { animated: true }
            })
        }, this.props.delay)
    }

    render() {
        const { delay = 0, noAnimation, primary, noMargin, big, ...props } = this.props;
        return (
            //@ts-ignore
            <StyledCard
                animated={this.state.animated}
                delay={delay}
                primary={primary}
                noAnimation={noAnimation}
                big={big}
                noMargin={noMargin}
                {...props}
            />
        )
    }
}

export default Card;
