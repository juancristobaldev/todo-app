import React, { useContext } from "react";
import  { SessionContext } from './context/SessionContext'; 
import TodoApp from "./components/TodoApp"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./components/Login/SingIn";
import SignUp from "./components/Login/SignUp";

function App() {
  const { session } = useContext(SessionContext);
  const loggedIn = session;

  return (
    <Router>
      <Routes>
        {loggedIn ? (
          <Route path="/" element={<TodoApp/>}/>
        ) : (
          <>
            <Route path="/" element={<SignIn/>} />
            <Route path="/login" element={<SignIn/>} />
            <Route path="/signup" element={<SignUp/>} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export {App}
