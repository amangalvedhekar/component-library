import * as React from 'react';
import {checkA11y} from '@storybook/addon-a11y';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import Card from './';
import SectionHeading from "../Header";

storiesOf("Card", module)
    .addDecorator(checkA11y)
    .addDecorator(withInfo)
    .add("default", () => (
      <div style={ {width: "20%"}}>
          <Card noMargin={false} animated={true} big={true}>
              <div style={{margin: "0 auto", textAlign: "center"}}>
                  <SectionHeading size={"2"}>Card Header</SectionHeading>
              </div>
              <div style={{margin: "0 auto", textAlign: "left"}}>
                  <p>
                      some data here as well!!
                  </p>
              </div>
          </Card>
      </div>
    ));
