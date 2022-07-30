import React, { useContext } from "react";
import { SessionContext } from "../context/SessionContext";
import '../styles/scss/DashBoard.scss';

let hoy = new Date()

const Dashboard = ({ children }) => {
  const { session } = useContext(SessionContext);
  return (
    <header className="HeaderDash">
      <div className="frontBackground"></div>
      <div className="HeaderTodo">
        <p>TODO APP</p>
      </div>
      <div className="HeaderDate">
        <p>{hoy.toDateString()}</p>
      </div>
      <div className="HeaderUser" >
        <h1>¡Hi {session?.fullName}!</h1>
      </div>
      <div className="HeaderTodoComplete">
        {children}
      </div>
    </header>);
};

export default Dashboard;
