import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SessionContext } from '../../context/SessionContext';
import { useMutation } from '@apollo/client';
import { USER_SIGN_IN } from '../../data/mutations';
import FormLogin from './Forms/FormLogin';
import LoginLayout from './LoginLayout';
import { SESSION_TOKEN } from '../../constants';

import '../../styles/scss/Login.scss';

export default function SignIn() {
  const navigate = useNavigate();
  const { refetchSession } = useContext(SessionContext);
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
        localStorage.setItem(SESSION_TOKEN, token);
        await refetchSession();
        navigate('/');
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
