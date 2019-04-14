import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from "./Button";
storiesOf("Button", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("with text", () => (
        <Button>Hello Button</Button>
    ))
    .add("with some emoji", () => (
        <Button>😀 😎 👍 💯</Button>
    ),{ info: { inline: false, header: false } });
