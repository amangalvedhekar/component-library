import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import InputButton from "./";
import {text, withKnobs} from "@storybook/addon-knobs";


storiesOf("Input Button", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add("default",
        () => (
            <InputButton
                placeholder={text("Placeholder", "Email here")}
                isLoading={false}
                isDisabled={false}
                type={"text"}
                buttonText={text("input button name", "Sign Up")}
            />
        ));