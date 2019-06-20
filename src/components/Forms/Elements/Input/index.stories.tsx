import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import {TextInput} from "./";

storiesOf("Input field", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("default input", () => (
        <div style={{margin: "0 auto", textAlign: "center", width: "80%"}}>
            <TextInput type={"text"} placeholder={"name"}/>
        </div>
    ));