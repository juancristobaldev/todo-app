import { useState, createContext } from 'react';
import { Modal } from '../components/Modal';
import { Container } from '../components/generals/Container';
import Alert from '../components/generals/Alert';

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [variables, setVariables] = useState({
    open: false,
    type: 'success',
    message: '',
  });

  const { open, message } = variables;

  const addAlert = (message, type = 'success') => {
    setVariables({
      open: true,
      message,
      type,
    });
  };

  return (
    <AlertContext.Provider value={{ addAlert }}>
      {children}
      {open && (
        <Container className="back">
          <Modal>
            <Alert message={message} />
          </Modal>
        </Container>
      )}
    </AlertContext.Provider>
  );
};
