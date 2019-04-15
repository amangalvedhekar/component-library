import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Table from "./";
storiesOf("Table", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("default", () => (
        <Table/>
    ));
