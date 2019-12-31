import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import SectionHeading from './';

storiesOf("Components/Section Header", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("default", () => (
        <div>
            <SectionHeading size={"1"}>Heading 1</SectionHeading>
            <SectionHeading size={"2"}>Heading 2</SectionHeading>
            <SectionHeading size={"3"}>Heading 3</SectionHeading>
            <SectionHeading size={"4"}>Heading 4</SectionHeading>
            <SectionHeading size={"5"}>Heading 5</SectionHeading>
            <SectionHeading size={"6"}>Heading 6</SectionHeading>
        </div>
    ));
