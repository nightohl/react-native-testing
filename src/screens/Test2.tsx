import * as React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {ScreenProps} from '../routes/Stack';

export const Test2Screen: React.FC<ScreenProps<'Test2'>> = ({route}) => {
  const item = route.params.item;

  return (
    <View>
      <Text style={styles.header}>Showing details for {item}</Text>
      <Text style={styles.body}>the number you have chosen is {item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 16,
  },
  body: {
    textAlign: 'center',
  },
});
