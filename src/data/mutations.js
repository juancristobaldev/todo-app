import { gql } from '@apollo/client';

export const USER_SIGN_UP = gql`
  mutation userSingUp($input: UserSignUpInput!) {
    userSignUp(input: $input) {
      user {
        id
        username
        firstName
        lastName
        email
      }
      success
      errors
    }
  }
`;

export const USER_SIGN_IN = gql`
  mutation userSignIn($input: UserSignInInput!) {
    userSignIn(input: $input) {
      token
      success
      errors
    }
  }
`;

export const TASK_CREATE = gql`
  mutation taskCreate($input: TaskCreateInput!){
    taskCreate(input: $input){
      errors
      success
    }
  }
`

export const TASK_DELETE = gql`
  mutation taskDelete($input: TaskDeleteInput!){
    taskDelete(input:$input){
      errors
      success
    }
  }
`

export const TASK_UPDATE = gql`
  mutation taskUpdate($input:TaskUpdateInput!){
    taskUpdate(input:$input){
      errors
      success
    }
  }
`