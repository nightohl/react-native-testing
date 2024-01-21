import React, {FC} from 'react';
import {Button, Text} from 'react-native';
import {setSleepState, useReactiveSleepState} from '../../states/sleepState';

export const MakeVarTest: FC = () => {
  const sleepModeState = useReactiveSleepState();

  if (sleepModeState === 'sleep') {
    return <Text>in sleep</Text>;
  }

  return (
    <>
      <Button
        title="go sleep"
        onPress={() => {
          setSleepState('sleep');
        }}
      />
      <Text>stay up</Text>
    </>
  );
};
