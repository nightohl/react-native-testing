import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {ScreenProps} from '../routes/Stack';
import {useIsClicked} from '../states/isClicked';

export const Test3Screen: React.FC<ScreenProps<'Test3'>> = () => {
  const {isClicked, setIsClicked} = useIsClicked();

  return (
    <View>
      <Text>isClicked {isClicked}</Text>
      <Button title="click" onPress={() => setIsClicked(prev => !prev)} />
    </View>
  );
};
