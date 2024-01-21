import {MockedProvider} from '@apollo/client/testing';
import {render, screen, userEvent} from '@testing-library/react-native';
import React from 'react';
import {
  DELETE_DOG_MUTATION,
  DeleteButton,
} from '../../components/ApolloClient/DeleteDogButton';

it('should render without error', () => {
  render(
    <MockedProvider mocks={[]}>
      <DeleteButton />
    </MockedProvider>,
  );
});

it('should render loading and success states on delete', async () => {
  jest.useFakeTimers();

  const deleteDog = {name: 'Buck', breed: 'Poodle', id: 1};
  const mocks = [
    {
      delay: 200,
      request: {
        query: DELETE_DOG_MUTATION,
        variables: {name: 'Buck'},
      },
      result: {data: deleteDog},
    },
  ];

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <DeleteButton />
    </MockedProvider>,
  );

  // Find the button element...
  const button = await screen.findByText('Click to Delete Buck');
  userEvent.press(button); // Simulate a click and fire the mutation

  expect(await screen.findByText('Loading...')).toBeOnTheScreen();
  expect(await screen.findByText('Deleted!')).toBeOnTheScreen();
});
