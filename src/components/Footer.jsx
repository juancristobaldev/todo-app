import React from 'react';
import '../styles/scss/Footer.scss';

export default function Footer() {
  return (
    <footer>
      <p>❤️: Juan Cristobal Dev</p>
      <a
        onClick={() => {
          localStorage.setItem('loggedin', false);
          window.location.reload();
        }}
        style={{
          marginTop: '.5rem',
          fontSize: '.75rem',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        Cerrar sesíon
      </a>
    </footer>
  );
}
