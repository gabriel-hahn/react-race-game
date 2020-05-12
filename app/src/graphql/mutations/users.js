import gql from 'graphql-tag';

const addUserMutation = gql`
  mutation Mutation($name: String!, $lifes: Int!, $laps: Int!) {
    addUser(name: $name, lifes: $lifes, laps: $laps) {
      id
    }
}`;

export { addUserMutation };
