import type { StorybookConfig } from '@storybook/nextjs'
import path from 'node:path'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
        },
      },
    }
  },
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        loaderOptions: {
          injectStoryParameters: false,
        },
      },
    },
    {
      name: '@storybook/addon-storysource',
    },
    'storybook-addon-designs',
    '@storybook/addon-knobs',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    '@storybook/addon-measure',
    '@storybook/addon-a11y',
    '@storybook/addon-styling',
    '@storybook/jest',
    '@storybook/testing-library',
    '@storybook/addon-viewport',
    '@storybook/addon-actions',
    '@storybook/addon-a11y', //신규 추가 End
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
