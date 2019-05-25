import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import {ListItem, StyledSpan, List} from "./";

const data = {
    text: "Dividends",
    quantity: 26,
    url: "/en/list-of-dividends"
};

const arrayData = [
    {
        text: "Dividends",
        quantity: 26,
        url: "/en/list-of-dividends"
    },
    {
        text: "Orders",
        quantity: 11,
        url: "/en/list-of-orders"
    },
    {
        text: "Fees",
        quantity: 2,
        url: "/en/list-of-fees"
    }
];

storiesOf("List", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("Badges", () => <StyledSpan>22</StyledSpan>)
    .add("List Item", () => <div style={{width: "40%"}}><ListItem item={data}/></div>)
    .add("List", () => <div style={{width: "40%"}}><List items={arrayData}/></div>);
