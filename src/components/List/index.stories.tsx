import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import {borderType, List, StyledUl} from "./";
import {Link} from "../Link";

const data = ["dividends", "fees", "trade", "deposits"];

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
    .add("practical example", () => (<StyledUl>
        {data.map(elm => (
            <List data={elm} borderType={borderType.bottom} tabIndex={0} key={elm}>
                <Link href={"#"}>
                    {elm}
                </Link>
            </List>
        ))}
    </StyledUl>));
