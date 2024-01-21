import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {MockedProvider} from '@apollo/client/testing';
import {Dog, GET_DOG_QUERY} from '../../components/ApolloClient/Dog';
import {GraphQLError} from 'graphql/error/GraphQLError';

it('renders without error', async () => {
  const mocks = [
    {
      delay: 30, // to prevent React from batching the loading state away
      // delay: Infinity // if you only want to test the loading state

      request: {
        query: GET_DOG_QUERY,
        variables: {
          name: 'Buck',
        },
      },
      result: {
        data: {
          dog: {id: '1', name: 'Buck', breed: 'bulldog'},
        },
      },
    },
  ];

  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Dog name="Buck" />
    </MockedProvider>,
  );

  expect(await screen.findByText('Loading...')).toBeOnTheScreen();
  expect(await screen.findByText('Buck is a bulldog')).toBeOnTheScreen();
});

it('should show error UI', async () => {
  const dogMock = {
    request: {
      query: GET_DOG_QUERY,
      variables: {name: 'Buck'},
    },
    error: new Error('An error occurred'), // network error : 통신 문제가 발생한 경우
    result: {
      errors: [new GraphQLError('Error!')], // graphql error : 서버에서 처리과정에서 문제가 발생한 경우
    },
  };

  render(
    <MockedProvider mocks={[dogMock]} addTypename={false}>
      <Dog name="Buck" />
    </MockedProvider>,
  );

  expect(await screen.findByText('An error occurred')).toBeOnTheScreen();
});
