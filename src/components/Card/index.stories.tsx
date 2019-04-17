import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import * as React from 'react';
import CardHeader from './CardHeader';

storiesOf("Card Header", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("default", () =>
        (<CardHeader backgroundColor={"#4c88bf"}
                     color={"#fff"}
                     text={"Some Fancy Header"}
                     textAlign={"center"}
        />)
    );