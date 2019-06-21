import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import InputButton from "./";
import {withKnobs} from "@storybook/addon-knobs";


storiesOf("Input Button", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .addDecorator(withKnobs)
    .add("default",
        () => (
            <InputButton
                placeholder={"Enter here"}
                isLoading={true}
                isDisabled={true}
                type={"text"}
                buttonText={"Click Here"}
            />
        ));