import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { USER_SIGN_UP } from '../../data/mutations';
import FormRegister from './Forms/FormRegister';
import LoginLayout from './LoginLayout';

import '../../styles/scss/Login.scss';

export default function SignUp() {
  const navigate = useNavigate();
  const [width, setWidth] = useState(window.innerWidth);
  const [loadingForm, setLoadingForm] = useState(false);
  const [variables, setVariables] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const [userSignUp] = useMutation(USER_SIGN_UP);

  const handleVariables = (e) => {
    setVariables({ ...variables, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingForm(true);
    await userSignUp({
      variables: {
        input: {
          ...variables,
        }
      }
    }).then(async ({ data }) => {
      const { errors, success } = data.userSignUp;
      if (success) {
        navigate('/login');
      }
      if (errors) {
        console.log(errors);
      }
      setLoadingForm(false);
    }).catch((error) => {
      console.log(error);
    })
  };

  const windowWidthChange = () => {
    setWidth(window.innerWidth);
  };

  window.addEventListener('resize', () => {
    windowWidthChange();
  });

  return (
    <LoginLayout width={width}>
      <FormRegister
        variables={variables}
        handleVariables={handleVariables}
        handleSubmit={handleSubmit}
        width={width}
        loadingForm={loadingForm}
      />
    </LoginLayout>
  );
}
