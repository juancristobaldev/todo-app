import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/scss/FormsAuth.scss';
import { SelectTheme } from './SelectTheme/SelectTheme';

export default function FormRegister({
  width,
  error,
  handleSubmit,
  variables,
  handleVariables,
  loadingForm
}) {
  const navigate = useNavigate();

  return (
    <>
      {width < 601 && (
        <div className="divDes">
          <p className="todoApp">TODO APP</p>
          <p className="todoDes">Lleva una cuenta de tus tareas diarias</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="formRegister">
        <div className="divTitle">
          <h2>Registrate</h2>
          {error && (
            <div>
              <p>{error.type}</p>
            </div>
          )}
        </div>
        <div className="divUser divInput">
          <label>Usuario:</label>
          <input name="username" value={variables.username} onChange={handleVariables} />
        </div>
        <div className="divName divInput">
          <label>Nombre:</label>
          <input name="firstName" value={variables.firstName} onChange={handleVariables} />
        </div>
        <div className="divLast divInput">
          <label>Apellido:</label>
          <input name="lastName" value={variables.lastName} onChange={handleVariables} />
        </div>
        <div className="divName divInput">
          <label>Email:</label>
          <input name="email" value={variables.email} onChange={handleVariables} />
        </div>
        <div className="divPass divInput">
          <label>Contraseña:</label>
          <input name="password" value={variables.password} onChange={handleVariables} type="password" />
        </div>
        <div className="themes">
          <label>Elige un tema:</label>
          <SelectTheme />
        </div>
        <div className="divButtons">
          <button type="submit" className="buttonRegister">
            {loadingForm ? 'Registrando...' : 'Registrarse'}
          </button>
          <button className="buttonLogin" onClick={() => navigate('/login')}>
            Iniciar sesion
          </button>
        </div>
      </form>
    </>
  );
}
