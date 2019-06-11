import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import SomeButton from "./Button";
storiesOf("Button", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("with text", () => (
        <SomeButton>Hello Button</SomeButton>
    ));
