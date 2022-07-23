import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/scss/FormsAuth.scss';

export default function FormLogin({
  handleVariables,
  variables,
  handleSubmit,
  width,
  loadingForm,
}) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      {width <= 600 && (
        <div className="divDes">
          <p className="todoApp">TODO APP</p>
          <p className="todoDes">Lleva una cuenta de tus tareas diarias</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="formLogin">
        <div className="divTitle">
          <h2>Inicia sesión.</h2>
        </div>
        <div className="divUser divInput">
          <label>Email:</label>
          <input name="email" value={variables.email} onChange={handleVariables} />
        </div>
        <div className="divPass divInput">
          <label>Contraseña:</label>
          <input name="password" value={variables.password} onChange={handleVariables} type="password" />
        </div>
        <div className="divButtons">
          <button type="submit" className="buttonLogin">
            { loadingForm ? 'Iniciando sesion..' : 'Iniciar sesion'}
          </button>
          <button
            className="buttonRegister"
            onClick={() => navigate('/signup')}
          >
            Registrarse
          </button>
        </div>
      </form>
    </React.Fragment>
  );
}
