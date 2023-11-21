import "./App.css";
import Navbar from "./components/Navbar.js";
import LogIn from "./pages/LogIn.js";
import SignUp from "./pages/SignUp.js";
import Home from "./pages/Home.js";
import { Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
