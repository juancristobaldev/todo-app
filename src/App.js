import React from "react";
import TodoApp from "./components/TodoApp"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./components/Login/SingIn";
import SignUp from "./components/Login/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoApp/>}/>
        <Route path="/login" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
    </Router>
  );
}

export {App}
