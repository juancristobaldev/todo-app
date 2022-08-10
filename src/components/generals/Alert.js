import React from 'react';
import '../../styles/App.css';
import '../../styles/scss/formModal.scss';
import { Container } from './Container';
import { Text } from './Text';

const Alert = ({ message }) => {
  return (
    <Container className="modal">
      <Text className={'text'}>
        🎉
        <br />
        {message}
      </Text>
    </Container>
  );
};

export default Alert;
