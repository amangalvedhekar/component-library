import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import { setIntlConfig, withIntl } from 'storybook-addon-intl';
import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import frLocaleData from 'react-intl/locale-data/fr';
import { addParameters } from '@storybook/react';
import {
  configureViewport,
  INITIAL_VIEWPORTS
} from '@storybook/addon-viewport';

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

const newViewports = {
  mobile: {
    name: 'Mobile',
    styles: {
      width: '320px',
      height: '568px'
    }
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  laptop: {
    name: 'Laptop',
    styles: {
      width: '1200px',
      height: '1024px'
    }
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1366px',
      height: '1024px'
    }
  },
  wide: {
    name: 'Wide',
    styles: {
      width: '1920px',
      height: '1080px'
    }
  }
};

configureViewport({
  viewports: newViewports,
  defaultViewport: 'Mobile'
});
