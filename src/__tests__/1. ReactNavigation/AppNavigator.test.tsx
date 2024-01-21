import {NavigationContainer} from '@react-navigation/native';
import {render, screen, userEvent} from '@testing-library/react-native';
import * as React from 'react';
import {Stack} from '../../routes/Stack';

describe('Testing react navigation', () => {
  test('page contains the header and 10 items', async () => {
    const component = (
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    );

    render(component);

    const header = await screen.findByText('List of numbers from 1 to 20');
    const items = await screen.findAllByText(/Item number/);

    expect(header).toBeOnTheScreen();
    expect(items.length).toBe(10);
  });

  test('clicking on one item takes you to the details screen', async () => {
    jest.useFakeTimers();

    const component = (
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    );

    render(component); // enter initial routes : Test1Screen
    const toClick = await screen.findByText('Item number 5');

    const user = userEvent.setup();
    await user.press(toClick); // navigate to Test2Screen

    // test navigation done well
    const newHeader = await screen.findByText('Showing details for 5');
    const newBody = await screen.findByText('the number you have chosen is 5');

    expect(newHeader).toBeOnTheScreen();
    expect(newBody).toBeOnTheScreen();
  });
});
