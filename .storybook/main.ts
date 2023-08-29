import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";

const toPath = (_path) => path.join(process.cwd(), _path);

const config: StorybookConfig = {
  webpackFinal: async (config) => {
    config.resolve?.modules?.push(toPath('src'));
    return config;
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
