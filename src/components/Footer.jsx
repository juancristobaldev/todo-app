import React, { useContext } from 'react';
import { SessionContext } from '../context/SessionContext';
import { useNavigate } from 'react-router-dom';
import { SESSION_TOKEN } from '../constants';
import '../styles/scss/Footer.scss';

const Footer = () => {
  const navigate = useNavigate();

  const { refetchSession } = useContext(SessionContext);

  const styles = {
    marginTop: '.5rem',
    fontSize: '.75rem',
    textDecoration: 'underline',
    cursor: 'pointer',
  }
  const logout = async () => {
    localStorage.removeItem(SESSION_TOKEN, '');
    await refetchSession();
    navigate('/');
  };

  return (
    <footer>
      <p>❤️: Juan Cristobal Dev</p>
      <a
        href="/"
        onClick={() => {
          logout();
        }}
        style={styles}
      >
        Cerrar sesíon
      </a>
    </footer>
  );
};

export default Footer;
