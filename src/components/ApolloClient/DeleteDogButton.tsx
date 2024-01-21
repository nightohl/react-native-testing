import React from 'react';
import {gql, useMutation} from '@apollo/client';
import {Button, Text} from 'react-native';

export const DELETE_DOG_MUTATION = gql`
  mutation deleteDog($name: String!) {
    deleteDog(name: $name) {
      id
      name
      breed
    }
  }
`;

export function DeleteButton() {
  const [mutate, {loading, error, data}] = useMutation(DELETE_DOG_MUTATION);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error!</Text>;
  }

  if (data) {
    return <Text>Deleted!</Text>;
  }

  return (
    <Button
      title="Click to Delete Buck"
      onPress={() => mutate({variables: {name: 'Buck'}})}
    />
  );
}
