import { addDecorator, configure } from '@storybook/react';

import { withKnobs } from "@storybook/addon-knobs";
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import frLocaleData from 'react-intl/locale-data/fr';

addLocaleData(enLocaleData);
addLocaleData(frLocaleData);
const messages = {
  'en': { 'button.label': 'Click me!' },
  'fr': { 'button.label': 'Klick mich!' }
};

const getMessages = locale => messages[locale];
setIntlConfig({
  locales: ['en', 'fr'],
  defaultLocale: 'en',
  getMessages,
});

const req = require.context('../src/components', true, /.stories.tsx$/);
addDecorator(withKnobs);
addDecorator(withIntl);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
