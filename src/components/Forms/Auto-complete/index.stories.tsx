import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import AutoComplete from "./";

const suggestions = [
    "Alligator",
    "Bask",
    "Crocodilian",
    "Death Roll",
    "Eggs",
    "Jaws",
    "Reptile",
    "Solitary",
    "Tail",
    "Wetlands"
];

storiesOf("Auto Complete", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("default",
        () => (
            // @ts-ignore
            <AutoComplete suggestions={suggestions}/>
        ));