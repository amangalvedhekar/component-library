import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import {Link} from "./";

storiesOf("Link", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("default", () => (<Link fontWeight={"bold"}>Some Link</Link>));