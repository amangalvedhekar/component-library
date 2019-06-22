import {addDecorator, storiesOf} from '@storybook/react';
import {checkA11y} from '@storybook/addon-a11y';
import {boolean, text, withKnobs} from "@storybook/addon-knobs";
import {action, configureActions} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import * as React from 'react';
import CheckBox from "./";

storiesOf("CheckBox", module)
    .addDecorator(checkA11y)
    .addDecorator(withKnobs)
    .addDecorator(withInfo)
    .add("default", () => <CheckBox
            name={"abc"}
            labelname={"One Item"}
            checked={boolean("Is Checked", false)}
            defaultChecked={boolean("default check", false)}
        />
    );

