import {makeVar, useReactiveVar} from '@apollo/client';

type SleepState = 'sleep' | 'stay-up';

export const sleepState = makeVar<SleepState>('stay-up');

export const useReactiveSleepState = (): SleepState => {
  return useReactiveVar(sleepState);
};

export const setSleepState = (newSleepState: SleepState): void => {
  sleepState(newSleepState);
};
