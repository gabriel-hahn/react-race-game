import gql from 'graphql-tag';

const addUserMutation = gql`
  mutation Mutation {
    addUser($name: String!, $lifes: Int!, $laps: Int!) {
      id,
      name,
      lifes,
      laps,
      date
    }
  }
`;

module.exports = { addUserMutation };
