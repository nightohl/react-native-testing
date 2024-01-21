// jest.config.ts

import type {Config} from 'jest';

const config: Config = {
  verbose: true,
  preset: 'react-native',
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation)',

    // For pnpm you need to use inlcude `(?!(?:.pnpm/)?` part like this:
    // 'node_modules/(?!(?:.pnpm/)?((jest-)?@?react-native|@react-native-community|@react-navigation))',
  ],
};

export default config;
