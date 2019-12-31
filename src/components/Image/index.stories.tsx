import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import StyledImage from './';
import {borderType} from "../List";

storiesOf("Components/Image Tag", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("default", () => (
        <StyledImage
            src={"https://placeimg.com/640/480/any"}
            alt={"some image"}
            borderType={borderType.all}
        />
    ));
