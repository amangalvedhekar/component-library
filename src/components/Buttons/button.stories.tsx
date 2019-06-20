import {addDecorator, storiesOf} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';
import {boolean, text, withKnobs} from "@storybook/addon-knobs";
import { action, configureActions } from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import * as React from 'react';
import Button from "./Button";


storiesOf("Button", module)
    .addDecorator(checkA11y)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add("default", () => (
        <Button
            loading={boolean("Is loading", false)}
            disabled={boolean("Is disabled", false)}
            onClick={action("click of button")}
        >
            {text("Label", "Hello!")}
        </Button>
    ));
