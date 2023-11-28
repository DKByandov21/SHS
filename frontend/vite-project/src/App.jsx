
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import React from "react";
import HomePage from "./routes/Home.jsx";
import MainIssue from "./routes/MainIssues.jsx";
import MainProfile from "./routes/MainProfile.jsx";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import NavBar from "./components/NavBar.jsx";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} /> 
      <Route path="/main-issue" element={<MainIssue/>} /> 
      <Route path="/main-profile" element={<MainProfile/>} /> 
    </>
  )
);

export default App;
