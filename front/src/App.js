import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home";
import LibraryMap from "./pages/libraryMap";
import Login from "./pages/login";
import MyProfil from "./pages/myProfil";
import Register from "./pages/register";
import UserLibrary from "./pages/userLibrary";
import MangaDetails from "./pages/mangaDetails";
import AllMangas from "./pages/allMangas";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const isLoggedIn = () => {
    return localStorage.getItem("token") ? true : false;
  };
  
  return (
    <Router>
      <Routes>
        <Route path="/libraryMap" element={<LibraryMap />} />

        <Route path="/myProfil" element={<MyProfil />} />

        <Route path="/userLibrary" element={<UserLibrary />} />
        <Route path="/mangaVolume/:id" element={<MangaDetails />} />
        <Route path="/manga/:mangaId" element={<AllMangas />} />
        <Route
          path="/"
          element={
            isLoggedIn() ? (
              <Navigate replace to="/home" />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />

        <Route
          path="/home"
          element={<Home /> }
        />

        <Route
          path="/login"
          element={!isLoggedIn() ? <Login /> : <Navigate replace to="/home" />}
        />

        <Route
          path="/register"
          element={
            !isLoggedIn() ? <Register /> : <Navigate replace to="/home" />
          }
        />

        <Route
          path="*"
          element={<Navigate replace to={isLoggedIn() ? "/home" : "/login"} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
