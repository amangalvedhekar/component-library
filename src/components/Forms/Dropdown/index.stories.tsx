import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import DropDown from "./";
import {text, withKnobs} from "@storybook/addon-knobs";

const fruit = [
    {
        id: 0,
        title: 'Apple',
        selected: false,
        key: 'fruit'
    },
    {
        id: 1,
        title: 'Orange',
        selected: false,
        key: 'fruit'
    },
    {
        id: 2,
        title: 'Grape',
        selected: false,
        key: 'fruit'
    },
    {
        id: 3,
        title: 'Pomegranate',
        selected: false,
        key: 'fruit'
    },
    {
        id: 4,
        title: 'Strawberry',
        selected: false,
        key: 'fruit'
    }
];

storiesOf("Components/Form Components/Drop Down", module)
    .addDecorator(checkA11y)
    .addDecorator(withKnobs)
    .add("default", () => (
        <DropDown
            list={fruit}
            title={text("Placeholder", "Please Select")}
        />)
    );
