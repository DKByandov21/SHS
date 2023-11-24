
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";
import React from "react";
import HomePage from "./routes/Home.jsx";
import MainPage from "./routes/Main.jsx";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import NavBar from "./components/NavBar.jsx";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} /> 
    </>
  )
);

export default App;
