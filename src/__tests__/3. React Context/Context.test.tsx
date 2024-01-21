import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Stack} from '../../routes/Stack';
import {render, screen, userEvent} from '@testing-library/react-native';
import {IsClickedProvider} from '../../states/isClicked';

test('when click button that change context value, UI that uses context value rerender', async () => {
  jest.useFakeTimers();

  const component = (
    <NavigationContainer>
      <IsClickedProvider>
        <Stack />
      </IsClickedProvider>
    </NavigationContainer>
  );

  render(component); // enter initial routes : Test1Screen
  const button = await screen.findByText('goToTest3');
  expect(button).toBeOnTheScreen();

  const user = userEvent.setup();
  await user.press(button); // navigate to Test3Screen

  // test navigation done well
  const Text = await screen.findByText('isClicked');
  expect(Text.props.children[1]).toBe(false);

  const button2 = await screen.findByText('click');
  await user.press(button2); // change context value

  expect(Text.props.children[1]).toBe(true);
});
