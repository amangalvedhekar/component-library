import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {storiesOf} from '@storybook/react';
import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";

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

storiesOf("Form Components", module)
    .addDecorator(checkA11y)
    .add("CheckBox", () => (
        <CheckBox
            name={"Some text"}
            labelname={"Some text"} checked={true}
        />)
    )
    .add("DropDown", () => (
        <Dropdown
            list={fruit}
            title={"Select a fruit"}
        />)
    );
