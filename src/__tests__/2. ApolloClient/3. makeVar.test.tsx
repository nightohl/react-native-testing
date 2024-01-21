import {MockedProvider} from '@apollo/client/testing/';
import {render, screen, userEvent} from '@testing-library/react-native';
import React from 'react';
import {MakeVarTest} from '../../components/ApolloClient/MakeVarTest';

describe('makeVar state change test', () => {
  test('when button pressed, state and UI should change', async () => {
    jest.useFakeTimers();

    render(
      <MockedProvider>
        <MakeVarTest />
      </MockedProvider>,
    );

    expect(await screen.findByText('stay up')).toBeOnTheScreen();

    const button = await screen.findByText('go sleep');
    userEvent.press(button);

    expect(await screen.findByText('in sleep')).toBeOnTheScreen();
  });
});
