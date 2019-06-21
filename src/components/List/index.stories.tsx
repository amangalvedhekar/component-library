import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import {borderType, List, StyledUl} from "./";
import {Link} from "../Link";
import CheckBox from "../Forms/CheckBox/";
import {boolean} from "@storybook/addon-knobs";

const data = ["dividends", "fees", "trade", "deposits"];
const packItems = [
    {
        isPacked: false,
        name: "Abc",
    },
    {
        isPacked: false,
        name: "Def",
    },
    {
        isPacked: false,
        name: "Ghi",
    },
    {
        isPacked: false,
        name: "Jkl",
    }
];

storiesOf("List", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("with tab index and all border", () => (
        <StyledUl>
            <List data={"abc"} tabIndex={0} borderType={borderType.all}>
                <Link href={"/something"}>
                    {"abc"}
                </Link>
            </List>
        </StyledUl>
    ))
    .add("with out tab index and bottom border", () => (
        <StyledUl>
            <List data={"abc"} borderType={borderType.bottom}>
                <Link href={"/something"}>
                    {"abc"}
                </Link>
            </List>
        </StyledUl>
    ))
    .add("with out tab index and top border", () => (
        <StyledUl>
            <List data={"abc"} borderType={borderType.top}>
                <Link href={"/something"}>
                    {"abc"}
                </Link>
            </List>
        </StyledUl>
    ))
    .add("List of items", () => (<StyledUl>
        {data.map(elm => (
            <List data={elm} borderType={borderType.bottom} tabIndex={0} key={elm}>
                <Link href={"#"}>
                    {elm}
                </Link>
            </List>
        ))}
    </StyledUl>))
    .add("List with checkbox and link", () => (<StyledUl>
        {packItems.map(elm => (
            <List
                data={elm.name}
                borderType={borderType.none}
                tabIndex={0}
                key={elm.name}
            >
                <CheckBox
                    name={elm.name}
                    labelname={elm.name}
                    checked={boolean("Is checked", false)}
                />
                <Link href={"#"}>
                    {"Remove"}
                </Link>
            </List>))}
    </StyledUl>));
