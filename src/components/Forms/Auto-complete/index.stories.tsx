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

storiesOf("Components/Auto Complete", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("default",
        () => (
            <div style={{ 'textAlign': 'center', 'margin': 'auto', 'width': '80%' }}>
                <AutoComplete suggestions={suggestions}/>
            </div>
        ));
