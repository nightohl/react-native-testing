import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Stack} from './src/routes/Stack';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
}

export default App;
