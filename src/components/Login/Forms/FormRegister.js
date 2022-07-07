import React from "react";
import { useNavigate } from "react-router-dom";
import '../../../styles/scss/FormsAuth.scss';
import { SelectTheme } from "./SelectTheme/SelectTheme";

export default function FormRegister({width,formDates,onRegister,error}){
    const navigate = useNavigate()
    return(
        <React.Fragment>
            {width < 601 && 
                    <div className="divDes">
                        <p className="todoApp"
                        >
                            TODO APP
                        </p>
                        <p className="todoDes"
                        >
                            Lleva una cuenta de tus tareas diarias
                        </p>
                    </div>
            }
            <form onSubmit={(event)=>onRegister(event)} className="formRegister">
            <div className="divTitle">
                <h2>Registrate</h2>
                {error && <div><p>{error.type}</p></div>}
            </div>
            <div className="divUser divInput">
                <label>Usuario:</label>
                <input onChange={(event) => formDates(event,"user")}/>
            </div>
            <div className="divName divInput">
                <label>Nombre:</label>
                <input onChange={(event) => formDates(event,"name")}/>
            </div>
            <div className="divPass divInput">
                <label>Contraseña:</label>
                <input type={"password"} onChange={(event) => formDates(event,"pass")}/>
            </div>
            <div className="divRepeatPass divInput">
                <label>Repite tu contraseña:</label>
                <input type={"password"} onChange={(event) => formDates(event,"passConfirm")}/>
            </div>
            <div className="themes">
                <label>Elige un tema:</label>
                <SelectTheme/>
            </div>
            <div  className="divButtons">
                <button
                type="submit"
                className="buttonRegister">Registrarse</button>
                <button
                className="buttonLogin"
                onClick={() => navigate('/login')}
                >Iniciar sesion</button>
            </div>
        </form>
        </React.Fragment>
    )
}