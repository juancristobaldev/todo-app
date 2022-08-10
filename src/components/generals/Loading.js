import React from 'react';
import { Container } from './Container';
import ReactLoading from "react-loading"

const Loading = () => {
  return (
    <Container className="modalLoading">
      <ReactLoading type="spokes" />
    </Container>
  );
};

export default Loading;
