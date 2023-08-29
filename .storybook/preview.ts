import type { Preview } from "@storybook/react";
import '../src/UI/styles/globals.css'
import StoryThemeProvider from '../src/UI/themes/StoryThemeProvider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [StoryThemeProvider];

export default preview;
