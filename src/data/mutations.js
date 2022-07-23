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
