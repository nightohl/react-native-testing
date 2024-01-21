import {gql, useQuery} from '@apollo/client';
import React from 'react';
import {Text} from 'react-native';

// Make sure that both the query and the component are exported
export const GET_DOG_QUERY = gql`
  query GetDog($name: String) {
    dog(name: $name) {
      id
      name
      breed
    }
  }
`;

interface Props {
  name: string;
}

export function Dog({name}: Props) {
  const {loading, error, data} = useQuery(GET_DOG_QUERY, {
    variables: {name},
  });

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  return (
    <Text>
      {data.dog.name} is a {data.dog.breed}
    </Text>
  );
}
