import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Table from "./";
import { headData, bodyData } from "./data";

storiesOf("Components/Table", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("row header", () => (
        <Table
            title={"Securities with yield and dividend"}
            tableStyle={{ width: "100%", borderCollapse: "seperate", borderSpacing: "10px 5px"}}
            headStyle={{textAlign: "left"}}
            headData={headData}
            bodyData={bodyData}
        />
    ));
