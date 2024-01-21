// jest.setup.js

/* eslint-disable no-undef */
// Import Jest Native matchers
import '@testing-library/react-native/extend-expect';

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
// Use this instead with React Native >= 0.64
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// Setup Reanimated mocking for Drawer navigation
// global.ReanimatedDataMock = {now: () => Date.now()};
// require('react-native-reanimated/lib/reanimated2/jestUtils').setUpTests();
