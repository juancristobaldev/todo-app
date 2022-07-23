import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { USER_SIGN_IN } from '../../data/mutations';
import FormLogin from './Forms/FormLogin';
import LoginLayout from './LoginLayout';

import '../../styles/scss/Login.scss';

export default function SignIn() {
  const [width, setWidth] = useState(window.innerWidth);

  const [loadingForm, setLoadingForm] = useState(false);

  const [variables, setVariables] = useState({
    email: '',
    password: '',
  });

  const handleVariables = (e) => {
    setVariables({ ...variables, [e.target.name]: e.target.value });
  };

  const [userSignIn] = useMutation(USER_SIGN_IN);

  const windowWidthChange = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', () => {
    windowWidthChange();
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingForm(true);
    await userSignIn({
      variables: {
        input: {
          ...variables,
        },
      },
    }).then( async ({data }) => {
      const { errors, success, token } = data.userSignIn;
      if( success) {
        console.log(token);
      }
      if(errors) {
        console.log(errors);
      }
      setLoadingForm(false);
    })
  };

  return (
    <LoginLayout width={width}>
      <FormLogin
        variables={variables}
        handleVariables={handleVariables}
        handleSubmit={handleSubmit}
        width={width}
        loadingForm={loadingForm}
      />
    </LoginLayout>
  );
}
