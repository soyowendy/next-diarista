import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import ediaristaTheme from './ediarista-theme';

addons.setConfig({
  theme: ediaristaTheme,
});