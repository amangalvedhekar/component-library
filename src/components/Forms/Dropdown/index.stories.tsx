import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import DropDown from "./";

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

// const resetThenSet = (id, key) => {
//     let temp = JSON.parse(JSON.stringify(this.state[key]))
//     temp.forEach(item => item.selected = false);
//     temp[id].selected = true;
//     this.setState({
//         [key]: temp
//     })
// }


storiesOf("Drop Down", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("default", () => (<DropDown list={fruit} title={"Please Select"}/>));
