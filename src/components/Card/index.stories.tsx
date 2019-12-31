import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import {boolean} from "@storybook/addon-knobs";
import Card from './';
import styled from "styled-components";
import SectionHeading from "../Header";

const data = [
    {
        info: "something interesting",
    },
    {
        info: "something interesting anotehr",
    },
    {
        info: "something interesting asas",
    },
    {
        info: "something interesting here",
    },
    {
        info: "something interesting here aksj",
    }
];

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 8px;
    margin-right: 8px;
`;
storiesOf("Components/Card", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("default", () => (
        <div>
            <Card isLoading={boolean("is Loading", false)}>
                <p>something</p>
            </Card>
        </div>
    )).add("list of data", () => (
    <StyledDiv>
        {data.map((elm, idx) => (
                <Card
                    isLoading={boolean(`is Loading for ${idx + 1}`, false)}
                >
                    <SectionHeading size={"5"}>{elm.info}</SectionHeading>
                </Card>
            )
        )
        }
    </StyledDiv>
));

