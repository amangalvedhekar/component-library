import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import Loader from './';


storiesOf("Loader", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("default", () => (
        <div style={ { margin: "0 auto", textAlign: "center" } }><Loader big/></div>
    ));
