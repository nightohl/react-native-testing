import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Stack} from './src/routes/Stack';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/lib/apollo/apolloClient';
import {IsClickedProvider} from './src/states/isClicked';

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <IsClickedProvider>
          <Stack />
        </IsClickedProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
