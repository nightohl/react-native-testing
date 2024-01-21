import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Stack} from './src/routes/Stack';
import {ApolloProvider} from '@apollo/client';
import {client} from './src/lib/apollo/apolloClient';

function App(): React.JSX.Element {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default App;
