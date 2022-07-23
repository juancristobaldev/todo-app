import React from "react";
import '../styles/scss/DashBoard.scss';

let hoy = new Date()


export default function DashBoard({children}){

    return(
        <header className="HeaderDash">
            <div className="frontBackground"></div>
            <div className="HeaderTodo">
                <p>TODO APP</p>
            </div>
            <div className="HeaderDate">
                <p>{hoy.toDateString()}</p>
            </div>
            <div className="HeaderUser" >
                <h1>¡Hi Juan Cristobal!</h1>
            </div>
            <div className="HeaderTodoComplete">
            {children}
            </div>
        </header>
    )
    
}