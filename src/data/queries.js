import { gql } from '@apollo/client';

export const ME = gql`
  query me {
    me {
      id
      fullName
      firstName
      lastName
      tasks {
        name
        id
        state
      }
    }
  }
`;

export const TASKS = gql`
query tasks($search: String) {
  tasks(search: $search) {
    id
    name
    state
  }
}
`;
