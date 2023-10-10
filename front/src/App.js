import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import LibraryMap from "./pages/libraryMap";
import Login from "./pages/login";
import MyProfil from "./pages/myProfil";
import Register from "./pages/register";
import UserLibrary from "./pages/userLibrary";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/libraryMap" element={<LibraryMap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myProfil" element={<MyProfil /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/userLibrary" element={<UserLibrary />} />
      </Routes>
    </Router>
  );
};

export default App;
