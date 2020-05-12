import gql from 'graphql-tag';

const getUsersQuery = gql`
  {
    users {
      id
      name
      laps
      lifes
    }
  }
`;

export { getUsersQuery };
