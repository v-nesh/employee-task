import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Register from "./components/Register";
import Login from "./components/Login";
// import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
