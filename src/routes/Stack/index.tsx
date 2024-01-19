import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

export type StackParams = {
  Test1: undefined;
  Test2: undefined;
  Test3: undefined;
};

const {Navigator, Screen} = createStackNavigator<StackParams>();

export const Stack = () => {
  return (
    <Navigator>
      <Screen name="Test1" component={Empty} />
      <Screen name="Test2" component={Empty} />
      <Screen name="Test3" component={Empty} />
    </Navigator>
  );
};

const Empty: FC = () => {
  return <></>;
};
