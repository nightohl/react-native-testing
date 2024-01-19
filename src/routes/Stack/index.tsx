import {StackScreenProps, createStackNavigator} from '@react-navigation/stack';
import React, {FC} from 'react';
import {Test1Screen} from '../../screens/Test1';
import {Test2Screen} from '../../screens/Test2';

export type StackParams = {
  Test1: undefined;
  Test2: {
    item: number;
  };
  Test3: undefined;
};

type ScreenNames = keyof StackParams;

export type ScreenProps<T extends ScreenNames> = StackScreenProps<
  StackParams,
  T
>;

const {Navigator, Screen} = createStackNavigator<StackParams>();

export const Stack = () => {
  return (
    <Navigator>
      <Screen name="Test1" component={Test1Screen} />
      <Screen name="Test2" component={Test2Screen} />
      <Screen name="Test3" component={Empty} />
    </Navigator>
  );
};

const Empty: FC = () => {
  return <></>;
};
