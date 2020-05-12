import gql from 'graphql-tag';

const getUsersQuery = gql`
  {
    users {
      name
      date
      laps
      lifes
    }
  }
`;

export { getUsersQuery };
